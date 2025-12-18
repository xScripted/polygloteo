<script lang="ts">
  import { untrack } from 'svelte'
  import { selectedLang } from '@/store'
  import Svg from '@/modules/shared/components/Svg.svelte'
  import { similarityScore } from '@/modules/shared/scripts/similarityScore'

  let { phrase, energyBar = $bindable(0) } = $props()

  $selectedLang

  let recording: boolean = $state(false)
  let mediaRecorder: MediaRecorder
  let chunks: Blob[] = $state([])
  let similarity: number = $state(-1)

  const start = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRecorder = new MediaRecorder(stream)

    chunks = []

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data)
    }

    mediaRecorder.start()
    recording = true
  }

  const stop = async () => {
    mediaRecorder.onstop = async () => {
      const webm = new Blob(chunks, { type: 'audio/webm' })
      recording = false

      const formData = new FormData()
      formData.append('audio', webm, 'audio.webm')
      formData.append('lang', $selectedLang)

      const res = await fetch('/api/speech-to-text', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      similarity = similarityScore(phrase.target, data.transcription || '')
    }

    mediaRecorder.stop()
  }

  let msg: string = $state(null)
  let animation: string = $state('')

  const toPercentage = (value: number, total: number): number => {
    if (total === 0) return 0

    const percentage = (value / total) * 100
    return Math.min(Math.max(percentage, 0), 100)
  }

  let filled: number = $derived(toPercentage(energyBar, 300))
  $effect(() => {
    if (similarity === -1) return

    if (similarity >= 80) {
      msg = `¡Excelente!🔥 +${Math.round(similarity)}`
      animation = 'jackInTheBox'
    }

    if (similarity >= 50 && similarity < 80) {
      msg = `¡Bien!👌 +${Math.round(similarity)}`
      animation = 'bounceInRight'
    }

    if (similarity < 50) {
      msg = `¡Mal!😥  +${Math.round(similarity - 10)}`
      animation = 'swing'
    }

    energyBar = untrack(() => energyBar) + similarity

    setTimeout(() => {
      animation = 'bounceOutRight'
    }, 2000)
  })
</script>

<style lang="scss">
  @import 'animate.css';

  .shadowing-container {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .translate {
      font-size: 20px;
      text-align: justify;
      color: var(--colorText2);
      font-style: italic;
    }

    .shadowing {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 20px;
      height: 80px;
      width: 100%;
    }

    .success {
      color: var(--colorPrimary);
      font-size: 18px;
      font-style: italic;
      width: fit-content;
      flex-shrink: 0;
      padding: 10px;
      border-radius: var(--radius);
      text-align: right;
      font-weight: bold;
    }

    .recordingText {
      width: 100%;
      text-align: left;
    }

    .energy-bar {
      border: 1px solid var(--colorBorder);
      width: 250px;
      height: 10px;
      flex-shrink: 0;
      border-radius: 5px;

      .filled {
        transition: 0.3s ease-out;
        height: 100%;
        background-color: var(--colorPrimary);
        border-radius: 5px;
      }
    }
  }
</style>

<div class="shadowing-container">
  <div class="translate">
    "{phrase.translate}"
  </div>
  <button class="shadowing g-box" onclick={recording ? stop : start}>
    <Svg name={recording ? 'microphoneOff' : 'microphone'} />
    <div class="recordingText">{recording ? 'Hablando...' : 'Hablar'}</div>
    <div class="animate__animated success animate__{animation}">{msg}</div>
    <div class="energy-bar">
      <div class="filled" style="width: {filled}%"></div>
    </div>
  </button>
</div>
