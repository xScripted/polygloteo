<script lang="ts">
  import Svg from '@/modules/shared/components/Svg.svelte'
  import LangSelector from '@/modules/shared/components/LangSelector.svelte'

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
</script>

<style lang="scss">
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

<h1 class="g-title">Capítulos</h1>
<LangSelector />
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
