<script lang="ts">
  import { goto } from '$app/navigation'
  import Button from '@/modules/shared/components/Button.svelte'
</script>

<style lang="scss">
  .landing {
    text-align: center;
    width: 100%;
    height: 100dvh;

    .text {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 100dvh;
      font-size: 20px;

      .g-title {
        font-size: 50px;
      }

      p {
        color: var(--colorText2);
      }
    }
  }
</style>

<div class="landing">
  <div class="text">
    <h1 class="g-title">Aprende un idioma en 24 semanas</h1>
    <br />
    <Button click={() => goto('/dashboard')}>Comienza ahora</Button>
  </div>
</div>
