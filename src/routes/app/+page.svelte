<script lang="ts">
  let { data } = $props()
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="home">
  <h1 class="g-title">¡Hola de nuevo {data.user.username}!</h1>
  <img src="/assets/cute.png" alt="" />
</div>
