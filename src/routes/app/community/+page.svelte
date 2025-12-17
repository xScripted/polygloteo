<script lang="ts">
  let { data } = $props()
</script>

<style lang="scss">
  .g-title {
    padding-top: 50px;
    text-align: center;
  }

  .users {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .user {
      transition: 0.3s ease-out;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 20px;

      &:hover {
        transform: translateX(10px);
      }

      .username {
        font-size: 20px;
        font-weight: bold;
      }

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    }
  }
</style>

<div class="g-wrapper">
  <h1 class="g-title">Comunidad</h1>

  <div class="users">
    {#each data.users as user}
      <a href={`/app/community/${user.username}`} class="g-box user">
        <img class="avatar" src={user.avatar || '/assets/cute.png'} alt="" />
        <span class="username">{user.username}</span>
      </a>
    {/each}
  </div>
</div>
