<script lang="ts">
  import Shadowing from './../Shadowing.svelte'
  import { getPhrases } from '@/modules/langs'
  import Explain from '@/modules/shared/components/Explain.svelte'
  import Page from '@/routes/+page.svelte'

  let { user, lang } = $props()

  const phrases = getPhrases(lang)
</script>

<div class="chapter-component">
  <h1><span>persona</span> と <span> lugar </span> へ 行きました</h1>
  <h2>Ir a un lugar con alguien</h2>

  <Explain />
</div>
