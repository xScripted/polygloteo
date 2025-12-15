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
      gap: 20px;
      font-size: 20px;
      margin-top: -70px;

      img {
        width: 200px;
        height: 200px;
      }

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
    <img src="/assets/icon.png" alt="" />
    <h1 class="g-title">Aprende un idioma sin darte cuenta</h1>
    <br />
    <Button click={() => goto('/dashboard')}>Comienza ahora</Button>
  </div>
</div>
