<script lang="ts">
  import '@/sass/global.scss'
  import { page } from '$app/state'
  import { fade } from 'svelte/transition'
  import Menu from '@/modules/shared/components/Menu.svelte'
  import { onMount } from 'svelte'

  let { children } = $props()

  onMount(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkmode')) || false

    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  })
</script>

<style lang="scss">
  main {
    min-height: 100dvh;
  }
  footer {
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    color: var(--colorPrimary);
    font-size: 12px;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="icon" href="/assets/icon.png" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
  <title>Polygloteo</title>
</svelte:head>

{#if page.url.pathname.includes('/app')}
  <Menu />
{/if}

{#key page.url.pathname}
  <main class="g-wrapper" in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    {@render children()}
  </main>
{/key}

<footer>
  <p>©2026 Polygloteo. All rights reserved.</p>
</footer>
