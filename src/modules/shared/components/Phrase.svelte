<script lang="ts">
  import Svg from '@/modules/shared/components/Svg.svelte'

  let { phrase } = $props()

  let isHint: boolean = $state(false)

  const play = async (text: string, key: string) => {
    const localUrl = `/assets/audios/jp/${key}.mp3`

    // 1️⃣ Comprobar si existe en assets
    const exists = await fetch(localUrl, { method: 'HEAD' })
      .then((res) => res.ok)
      .catch(() => false)

    // 2️⃣ Si existe → reproducir y salir
    if (exists) {
      const audio = new Audio(localUrl)
      await audio.play()
      return
    }

    // 3️⃣ Si NO existe → llamar a la API
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

    // Base64 → Uint8Array
    const audioArray = Uint8Array.from(atob(data.audio), (c) => c.charCodeAt(0))

    const blob = new Blob([audioArray], { type: 'audio/mp3' })
    const url = URL.createObjectURL(blob)

    const audio = new Audio(url)

    // ⬇️ Descargar SOLO si viene de la API
    audio.addEventListener('ended', () => {
      const a = document.createElement('a')
      a.href = url
      a.download = `${key}.mp3`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      URL.revokeObjectURL(url)
    })

    await audio.play()
  }
</script>

<style lang="scss">
  .phrase {
    position: relative;
    padding: 10px;
    width: fit-content;
    padding-top: 20px;
    
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

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
      font-size: 18px;
      padding: 0 20px;
    }

    p {
      margin: 0;
      padding: 5px;
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
      font-size: 16px;
    }

    .buttons {
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      gap: 10px;

      :global(svg),
      :global(path) {
        transition: 0.3s ease;
        fill: var(--colorText2);
        stroke: var(--colorText2);
        border-radius: 5px;
        padding: 5px;

        box-shadow:
          rgba(6, 24, 44, 0) 0px 0px 0px 2px,
          rgba(6, 24, 44, 0) 0px 4px 6px -1px,
          rgba(255, 255, 255, 0) 0px 1px 0px inset;
      }

      :global(svg:hover),
      :global(path:hover) {
        box-shadow:
          rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
          rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
          rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      }
    }
  }
</style>

<div class="phrase g-box" class:isHint>
  <div class="target">
    <p>{phrase.target}</p>
    <p>{phrase.targetHelper}</p>
  </div>

  <div class="hint">
    <p>{phrase.translate}</p>
    <p>{phrase.targetHelper2}</p>
  </div>

  <div class="buttons">
    <button onclick={() => play(phrase.target, phrase.key)}>
      <Svg name="audio" width="40" height="40" />
    </button>

    <button onclick={() => (isHint = !isHint)}>
      <Svg name="idea" width="40" height="40" />
    </button>
  </div>
</div>
