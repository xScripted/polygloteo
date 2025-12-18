<script lang="ts">
  import { page } from '$app/state'
  import { chapters } from '@/modules/shared/constants/chapters'
  import { selectedLang } from '@/store'

  import type { Component } from 'svelte'

  const user = $derived(page.data.user)
  const lang = $derived($selectedLang)

  const modules = import.meta.glob('/src/modules/shared/components/Chapters/Chapter*.svelte')

  const chapterId = $derived(Number(page.params.id))
  const chapter = $derived(chapters.find((c) => c.id === chapterId))

  const componentPromise = $derived(
    (async () => {
      const path = Object.keys(modules).find((path) => path.endsWith(`/Chapter${chapterId}.svelte`))

      if (!path) return null

      const module = (await modules[path]()) as { default: Component }
      return module.default
    })()
  )
</script>

{#await componentPromise then ActiveComponent}
  {#if ActiveComponent}
    <ActiveComponent {user} {lang} />
  {:else}
    <p>Component not found for chapter {chapterId}</p>
  {/if}
{/await}
