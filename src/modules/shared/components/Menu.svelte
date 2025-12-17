<script lang="ts">
  import { page } from '$app/state'

  const items = [
    {
      label: '',
      href: '/app',
    },
    {
      label: 'Capítulos',
      href: '/app/chapters',
    },

    {
      label: 'Biblioteca',
      href: '/app/library',
    },
    {
      label: 'Comunidad',
      href: '/app/community',
    },
  ]

  const user = $derived(page.data.user)
</script>

<style lang="scss">
  .ghost {
    height: 80px;
  }

  .menu {
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid var(--colorBorder);
    background-color: var(--colorNeutral);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 8;
    padding: 0 20px;

    .g-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0 auto;

      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 16px;
      }

      ul {
        display: flex;
        gap: 40px;
        align-items: center;

        a {
          display: flex;
          height: 100%;
          align-items: center;
          gap: 20px;
          color: var(--colorText2);

          &:hover {
            color: var(--colorPrimary);
          }
          font-size: 16px;
        }
      }

      .profile {
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--colorBorder);
      object-fit: cover;
    }
  }
</style>

<div class="ghost"></div>
<nav class="menu">
  <div class="g-wrapper">
    <a href="/app" class="logo">
      <img src="/assets/icon.png" alt="" width="50px" height="50px" />
      <span>Polygloteo</span>
    </a>

    <div class="right">
      <ul>
        {#each items as item}
          <li>
            <a href={item.href}>{item.label}</a>
          </li>
        {/each}

        <li>
          {#if user}
            <a class="profile" href={`/app/community/${user.username}`}>
              {user.username}
              <img class="avatar" src={user.avatar || '/assets/cute.png'} alt="" />
            </a>
          {/if}
        </li>
      </ul>
    </div>
  </div>
</nav>
