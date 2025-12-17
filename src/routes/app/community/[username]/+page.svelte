<script lang="ts">
  import { page } from '$app/state'
  import { goto } from '$app/navigation'
  import Button from '@/modules/shared/components/Button.svelte'

  const user = $derived(page.data.user)

  const logout = () => {
    goto('/api/auth/logout')
  }

  const toggleDarkmode = () => {
    const darkMode = JSON.parse(localStorage.getItem('darkmode')) || false

    localStorage.setItem('darkmode', JSON.stringify(!darkMode))

    document.body.classList.toggle('dark-mode')
  }
</script>

<style lang="scss">
  .profile {
    padding-top: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 100px;
      font-weight: bold;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: var(--radius);
      object-fit: cover;
      padding: 0;
    }
  }
</style>

<div class="g-wrapper">
  <div class="profile">
    <img class="g-box" src={user?.avatar || '/assets/cute.png'} alt="" />
    <h1>{user?.username}</h1>

    <Button click={toggleDarkmode}>Darkmode</Button>

    <br />
    <button onclick={logout}>
      <span>Logout</span>
    </button>
  </div>
</div>
