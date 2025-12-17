<script lang="ts">
  import { phrases } from '@/modules/langs/japanese'
  import Phrase from '@/modules/shared/components/Phrase.svelte'
  import Shadowing from '@/modules/shared/components/Shadowing.svelte'

  let chapters = $state([
    {
      completed: 300,
    },
  ])

  let currentLang = $state('japan')

  const swapFlag = (lang: string) => {
    currentLang = lang
  }
</script>

<style lang="scss">
  .flags {
    display: flex;
    gap: 20px;

    .flag {
      transition: 0.3s ease;

      &:hover {
        transform: scale(0.9);
      }
      img {
        width: 100px;
      }
    }
  }

  .g-title {
    padding-top: 100px;
    padding-bottom: 20px;
    text-align: center;
  }

  .chapter {
    transition: 1s ease-out;
    opacity: 0;

    &.show {
      opacity: 1;
    }
  }

  .history {
    p {
      font-size: 20px;
      text-align: justify;
    }

    span {
      color: var(--colorText2);
      font-style: italic;
    }
  }

  .phrases {
    display: flex;
    gap: 20px;

    &.right {
      justify-content: flex-end;
    }
  }
</style>

<div class="g-wrapper">

  
  <p>Idioma activo: <span>Japonés</span></p>

  <div class="flags">
    <button class="flag" onclick={() => swapFlag('japan')}>
      <img src="/assets/flags/japan.png" alt="" />
    </button>

    <button class="flag" onclick={() => swapFlag('france')}>
      <img src="/assets/flags/france.png" alt="" />
    </button>
  </div>
</div>

<div class="g-wrapper">
  <h3 class="g-title">Capítulo 1 <span>El viaje empieza con mal pie</span></h3>
  <div class="history">
    <section class="chapter show">
      <p>
        Acabas de llegar a Tokyo, <br /> tienes mucho cansancio en el cuerpo y quieres buscar un hotel barato porque eres una persona irresponsable y no
        lo has hecho antes.
      </p>
      <p>
        Te encuentras a una japonesita por la calle y te dispones a preguntarle, pero antes te preparas bien mentalmente las frases para no cagarla:
      </p>

      <div class="phrases">
        <Phrase phrase={phrases.goodAfternoon} />
        <Phrase phrase={phrases.imVeryTired} />
      </div>

      <p>Ahora es tu turno de hablar:</p>

      <Shadowing phrase={phrases.goodAfternoonImVeryTired} bind:energyBar={chapters[0].completed} />
    </section>

    <section class="chapter" class:show={chapters[0].completed >= 300}>
      <p>La chica te mira con cara de preocupación y te dice:</p>

      <div class="phrases right">
        <Phrase phrase={phrases.areYouOk} />
      </div>

      <Shadowing phrase={phrases.areYouOk} />

      <p>Es tu oportunidad de explicarle tu problema y sacar tus habilidades con el Japonés a relucir.</p>

      <p>
        <span> No te abrumes, divide y vencerás. Si aprendes esto serás un 20% mas nativo.</span>
      </p>

      <div class="phrases">
        <Phrase phrase={phrases.imOkCasual} />
        <Phrase phrase={phrases.tiredFromTravel} />
        <Phrase phrase={phrases.needToFindHotel} />
      </div>
    </section>
  </div>
</div>
