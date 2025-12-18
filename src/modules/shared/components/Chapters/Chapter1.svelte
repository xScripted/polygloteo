<script lang="ts">
  import Shadowing from './../Shadowing.svelte'
  import { getPhrases } from '@/modules/langs'
  import Phrase from '@/modules/shared/components/Phrase.svelte'
  import Page from '@/routes/+page.svelte'

  let { user, lang } = $props()

  const phrases = getPhrases(lang)
</script>

<div class="chapter-component">
  <h1 class="g-title">Capítulo 1</h1>

  <p>
    Te despiertas en el suelo, sientes la hierba bajo tus palmas como si fueran miles agujas.<br /> Intentas incorporarte con dificultad, cada movimiento
    hace retumbar tu cabeza y con la habilidad de un niño que acaba de aprender a andar, consigues apoyarte en la corteza de un árbol.
  </p>

  <p>
    Miras a tu alrededor, cada punto donde aterrizas tu vista es idéntico, buscas desconcertado algún hueco entre los árboles y lo ves, <br /> un punto
    cegado por la luz del sol.
  </p>

  <p>
    Vas hacia él y la vista no te aclara de dudas, te añade más, entre el desconcierto se te plantean varias preguntas. Sabes quién eres, te llamas {user.name},
    pero no recuerdas nada más. <br /> Una pregunta se hace mucho más evidente que las otras.
  </p>

  <Phrase phrase={phrases.whereIAm} />
  <Shadowing phrase={phrases.whereIAm} />

  <p>Se la dices a la nada, abres la boca y hablas, pero no eres capaz de reconocer los sonidos que salen de ella, vuelves a intentarlo</p>

  <Shadowing phrase={phrases.whereIAm} />

  <p>
    Lo intentas una y otra vez, desconcertado, confundido, hasta que te das cuenta. La dices una última vez, pero esta vez es diferente, la dices con
    más seguridad.
  </p>

  <Shadowing phrase={phrases.whereIAm} />

  <p>
    Y reaccionas. Te han robado lo que parecía imposible, quieres recuperarlo, <strong>tienes</strong> que recuperarlo. <br />Necesitas poder
    entenderte, necesitas recuperar la capacidad de entender tu propio idioma.
  </p>
</div>
