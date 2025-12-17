<script lang="ts">
  let { data } = $props()
</script>

<style lang="scss">
  .users {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .user {
      transition: 0.3s ease-out;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      .left,
      .right {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .username {
        font-size: 20px;
        font-weight: bold;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: var(--radius);
      }
    }
  }
</style>

<div class="g-wrapper">
  <h1 class="g-title">Comunidad</h1>

  <div class="users">
    {#each data.users as user}
      <div class="g-box user">
        <div class="left">
          <img class="avatar" src={user.avatar || '/assets/cute.png'} alt="" />
          <span class="username">{user.username}</span>
        </div>

        <div class="right">
          <span class="streak">🔥 {user.streak || 0}</span>
        </div>
      </div>
    {/each}
  </div>
</div>
