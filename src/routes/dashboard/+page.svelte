<script lang="ts">
  import { weeks } from '@/modules/langs/japanese'
  import Button from '@/modules/shared/components/Button.svelte'
  import Phrase from '@/modules/shared/components/Phrase.svelte'
</script>

<style lang="scss">
  .g-title {
    padding-top: 100px;
    padding-bottom: 20px;
    text-align: center;
  }

  .phrases {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>

<div class="g-wrapper">
  {#each weeks as week, i}
    <h3 class="g-title">Semana {i + 1}</h3>

    <div class="phrases">
      {#each week.phrases as phrase}
        <Phrase {phrase} />
      {/each}
    </div>
  {/each}
</div>
