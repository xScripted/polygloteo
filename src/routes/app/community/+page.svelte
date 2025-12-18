<script lang="ts">
  let { data } = $props()

  const formatDate = (date: string | Date | null) => {
    if (!date) return 'Nunca'
    const d = new Date(date)
    const day = d.getDate().toString().padStart(2, '0')
    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const year = d.getFullYear().toString().slice(-2)
    const hours = d.getHours().toString().padStart(2, '0')
    const minutes = d.getMinutes().toString().padStart(2, '0')

    return `${day}/${month}/${year} ${hours}:${minutes}`
  }
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

        .last {
          width: 100px;
          text-align: center;
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
            <div class="item">Frases:</div>
          </div>

          <div class="lang">
            <img src="/assets/flags/france.png" alt="" />

            <div class="item">Capítulos:</div>
            <div class="item">Frases:</div>
          </div>
        </div>

        <span class="streak">🔥 {user.streak || 0}</span>
        <span class="last">{formatDate(user.lastConnection)}</span>
      </div>
    </div>
  {/each}
</div>
