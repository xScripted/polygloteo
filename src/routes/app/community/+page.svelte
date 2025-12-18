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

      .right {
        .langs {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .lang {
            display: flex;
            gap: 20px;

            .item {
              width: 150px;
              color: var(--colorText2);
            }
            img {
              width: 30px;
            }
          }
        }
      }

      .username {
        font-size: 20px;
        font-weight: bold;
      }

      .avatar {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: var(--radius);
      }
    }
  }
</style>

<h1 class="g-title">Comunidad</h1>

<div class="users">
  {#each data.users as user}
    <div class="g-box user">
      <div class="left">
        <img class="avatar" src={user.avatar || '/assets/cute.png'} alt="" />
        <span class="username">{user.username}</span>
      </div>

      <div class="right">
        <div class="langs">
          <div class="lang">
            <img src="/assets/flags/japan.png" alt="" />

            <div class="item">Capítulos:</div>
            <div class="item">Frases aprendidas:</div>
          </div>

          <div class="lang">
            <img src="/assets/flags/france.png" alt="" />

            <div class="item">Capítulos:</div>
            <div class="item">Frases aprendidas:</div>
          </div>
        </div>

        <span class="streak">🔥 {user.streak || 0}</span>
      </div>
    </div>
  {/each}
</div>
