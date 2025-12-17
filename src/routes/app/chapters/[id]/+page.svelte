<script lang="ts">
  import { page } from '$app/state'
  import { chapters } from '@/modules/shared/constants/chapters'

  const chapter = $derived(chapters.find((chapter) => chapter.id === Number(page.params.id)))

  console.log(page.params.id)
</script>

<style lang="scss">
  .chapter {
    margin-top: 60px;
    padding: 20px;
  }
</style>

<div class="g-wrapper">
  <h1 class="g-title">{chapter?.title}</h1>
  <div class="chapter">
    {chapter?.title}
  </div>
</div>
