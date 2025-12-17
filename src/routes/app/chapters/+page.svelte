<script lang="ts">
  import { phrases } from '@/modules/langs/japanese'
  import Phrase from '@/modules/shared/components/Phrase.svelte'
  import Shadowing from '@/modules/shared/components/Shadowing.svelte'
  import Svg from '@/modules/shared/components/Svg.svelte'
  import { selectedLang } from '@/store'

  let chapters = $state([
    {
      title: 'Un mal día lo tiene cualquiera',
      completed: false,
    },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
  ])

  const swapFlag = (lang: string) => {
    $selectedLang = lang

    localStorage.setItem('activeLang', lang)
  }

  $effect(() => {
    $selectedLang = localStorage.getItem('activeLang') || 'japan'
  })
</script>

<style lang="scss">
  .flags {
    display: flex;
    gap: 20px;
    height: 100px;
    padding-top: 20px;
    justify-content: center;

    .flag {
      transition: 0.3s ease;
      transform: scale(0.8);
      height: fit-content;
      opacity: 0.5;

      &.active {
        transform: scale(1);
        opacity: 1;
        box-shadow:
          rgba(56, 0, 42, 0.4) 0px 10px 20px,
          rgba(56, 0, 42, 0.3) 0px 7px 13px -3px;
      }

      img {
        display: block;
        width: 70px;
      }
    }
  }

  .chapters {
    display: grid;
    gap: 20px;
    padding: 20px 0;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    .chapter {
      position: relative;
      transition: 0.3s ease;
      height: 150px;
      cursor: pointer;
      overflow: hidden;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0px;

      .chapter-title {
        font-size: 24px;
        font-weight: bold;
        z-index: 2;

        &.purple {
          color: var(--colorPrimary);
        }
      }

      span {
        z-index: 2;
      }

      .cute {
        position: absolute;
        z-index: 0;
        width: 80%;
        bottom: -100px;
        opacity: 0.2;
      }

      &:active {
        transform: scale(0.9);
      }

      &.locked {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
</style>

<div class="g-wrapper">
  <h1 class="g-title">Capítulos</h1>

  <div class="flags">
    <button class="flag" onclick={() => swapFlag('japan')} class:active={$selectedLang === 'japan'}>
      <img src="/assets/flags/japan.png" alt="" />
    </button>

    <button class="flag" onclick={() => swapFlag('france')} class:active={$selectedLang === 'france'}>
      <img src="/assets/flags/france.png" alt="" />
    </button>
  </div>

  <div class="chapters">
    {#each chapters as chapter, index}
      {#if chapter.locked}
        <div class="g-box chapter locked">
          <Svg name="lock" width="50" height="50" fill="var(--colorNeutral)" />
        </div>
      {:else}
        <a class="g-box chapter" href="/app/chapters/{index + 1}">
          {#if chapter.completed}
            <img class="cute" src="/assets/cute.png" alt="" />
          {/if}

          <h5 class="chapter-title" class:purple={chapter.completed}>Capítulo {index + 1}</h5>
          <span>{chapter.title}</span>
        </a>
      {/if}
    {/each}
  </div>
</div>
