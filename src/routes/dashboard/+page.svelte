<script lang="ts">
  import { phrases } from '@/modules/langs/japanese'
  import Button from '@/modules/shared/components/Button.svelte'
  import Phrase from '@/modules/shared/components/Phrase.svelte'
</script>

<style lang="scss">
  .g-title {
    padding-top: 100px;
    padding-bottom: 20px;
    text-align: center;
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
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>

<div class="g-wrapper">
  <h3 class="g-title">Capítulo 1 <span>El viaje empieza con mal pie</span></h3>
  <div class="history">
    <p>
      Acabas de llegar a Tokyo, <br /> tienes mucho cansancio en el cuerpo y quieres buscar un hotel barato porque eres una persona irresponsable y no lo
      has hecho antes.
    </p>
    <p>
      Te encuentras a una japonesita por la calle y te dispones a preguntarle, pero antes te preparas bien mentalmente las frases para no cagarla:
    </p>

    <p>
      <span>"Buenas tardes, estoy muy cansado."</span>
    </p>
    <div class="phrases">
      <Phrase phrase={phrases.goodAfternoon} />
      <Phrase phrase={phrases.imVeryTired} />
    </div>
  </div>
</div>
