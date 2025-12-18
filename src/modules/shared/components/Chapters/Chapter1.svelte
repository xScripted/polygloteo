<script lang="ts">
  import { getPhrases } from '@/modules/langs'
  import Phrase from '@/modules/shared/components/Phrase.svelte'

  let { user, lang } = $props()

  const phrases = getPhrases(lang)
</script>

<div class="chapter-component">
  <h1 class="g-title">Capítulo 1</h1>

  <p>Te despiertas en el suelo.<br /> La cabeza te duele.<br /> No recuerdas nada.<br /> Miras alrededor.<br /> Hay un árbol.<br /> Estás vivo.</p>

  <p>Es lo importante.</p>

  <p>
    Sabes quién eres, te llamas {user.name}. <br />
    Sabes que estás herido. <br />
    Sabes que tienes miedo. <br />
  </p>
  <p>La frase se rompe.</p>

  <p>
    Pero cuando intentas hablar… <br />Las palabras no encajan. <br />Los sonidos son extraños. <br />Entiendes la voz que te habla, pero no puedes
    usarla. <br />
  </p>

  <p>Como si el idioma estuviera… bloqueado.</p>

  <p>Cuando cierras los ojos eres capaz de recordar algo, de forma incompleta aparecen imágenes, cartas con las palabras que intentas recordar.</p>

  <Phrase phrase={phrases.whereIAm} />
</div>
