<script lang="ts">
  import Button from '@/modules/shared/components/Button.svelte'

  let { phrase } = $props()

  let isHint: boolean = $state(false)

  const play = async (text: string) => {
    // Llamamos al endpoint SvelteKit que genera el audio
    const res = await fetch('/api/text-to-speech', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })

    const data = await res.json()

    if (!data.audio) {
      console.error('No se generó audio', data)
      return
    }

    // Convertir base64 a Uint8Array
    const audioArray = Uint8Array.from(atob(data.audio), (c) => c.charCodeAt(0))

    // Crear blob y URL
    const blob = new Blob([audioArray], { type: 'audio/mp3' })
    const url = URL.createObjectURL(blob)

    // Reproducir
    const audio = new Audio(url)
    audio.play()
  }
</script>

<style lang="scss">
  .phrase {
    position: relative;
    padding: 10px;
    padding-top: 20px;
    border-radius: var(--radius);
    text-align: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow:
      rgba(56, 0, 42, 0.4) 0px 2px 4px,
      rgba(56, 0, 42, 0.3) 0px 7px 13px -3px,
      rgba(56, 0, 42, 0.2) 0px -3px 0px inset;

    &.isHint {
      .hint {
        opacity: 1;
      }

      .target {
        opacity: 0;
      }
    }

    .target {
      transition: 0.3s ease;
      font-weight: bold;
      font-size: 20px;
    }

    .hint {
      transition: 0.3s ease;
      position: absolute;
      top: 30px;
      left: 0;
      color: var(--colorText2);
      text-align: center;
      width: 100%;
      opacity: 0;
    }

    .buttons {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      gap: 10px;

      :global(button) {
        padding: 10px;
        min-height: 0;
        border: 0 !important;
      }

      :global(button:hover svg) {
        filter: grayscale(0) opacity(1);
      }

      :global(svg) {
        width: 24px;
        height: 24px;
        filter: grayscale(1) opacity(0.5);
        fill: var(--colorPrimary);
      }

      :global(path) {
        stroke: var(--colorPrimary);
      }
    }
  }
</style>

<div class="phrase" class:isHint>
  <div class="target">
    <p>{phrase.target}</p>
    <p>{phrase.targetHelper}</p>
  </div>

  <div class="hint">
    <p>{phrase.translate}</p>
    <p>{phrase.targetHelper2}</p>
  </div>

  <div class="buttons">
    <Button icon="audio" click={() => play(phrase.target)} type="secondary" />
    <Button icon="idea" click={() => (isHint = !isHint)} type="secondary" />
  </div>
</div>
