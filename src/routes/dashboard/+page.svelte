<script lang="ts">
  import { phrases } from '@/modules/langs/japanese'
  import Phrase from '@/modules/shared/components/Phrase.svelte'
  import Shadowing from '@/modules/shared/components/Shadowing.svelte'

  let chapters = $state([
    {
      completed: 300,
    },
  ])
</script>

<style lang="scss">
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

      <div class="phrases">
        <Phrase phrase={phrases.imOkCasual} />
        <Phrase phrase={phrases.tiredFromTravelCasual} />
        <Phrase phrase={phrases.needToFindHotelCasual} />
      </div>
    </section>
  </div>
</div>
