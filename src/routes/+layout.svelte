<script lang="ts">
  import '@/sass/global.scss'
  import { page } from '$app/state'
  import { fade } from 'svelte/transition'
  import Menu from '@/modules/shared/components/Menu.svelte'

  let { children } = $props()
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

<Menu />

{#key page.url.pathname}
  <main in:fade={{ delay: 300, duration: 200 }} out:fade={{ duration: 200 }}>
    {@render children()}
  </main>
{/key}

<footer>
  <p>©2026 Polygloteo. All rights reserved.</p>
</footer>
