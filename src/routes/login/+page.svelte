<script>
  import { goto } from '$app/navigation'
  import Button from '@/modules/shared/components/Button.svelte'

  let username = $state('')
  let password = $state('')

  const login = async () => {
    if (!username || !password) {
      alert('Faltan campos obligatorios')
      return
    }

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    if (res.ok) {
      goto('/app')
    } else {
      alert('Error al iniciar sesión')
    }
  }
</script>

<style lang="scss">
  .g-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100dvh - 60px);

    .container {
      position: relative;
      max-width: 350px;
      width: 100%;

      &:hover {
        .cute {
          top: -50px;
        }
      }

      .cute {
        transition: 0.3s ease-out;
        position: absolute;
        top: -20px;
        left: 0;
        right: 0;
        margin: auto;
        width: 120px;
        z-index: -1;
      }

      .login {
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        .header {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: space-evenly;
          padding-bottom: 20px;

          h1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 20px;

            span {
              padding: 0;
              font-weight: bold;
            }
          }
        }
      }
    }

    .link {
      text-align: center;
    }
  }
</style>

<div class="g-wrapper">
  <div class="container">
    <img class="cute" src="/assets/cute.png" alt="" />
    <div class="login g-box">
      <div class="header">
        <img src="/assets/icon.png" alt="" width="100px" height="100px" />
        <h1>
          <span>Welcome</span>
          <span>Bienvenue</span>
          <span>ようこそ</span>
        </h1>
      </div>

      <input type="text" placeholder="Usuario" bind:value={username} />
      <input type="password" placeholder="Contraseña" bind:value={password} />

      <Button click={login}>Iniciar sesión</Button>

      <hr />

      <a href="/register" class="link">
        <span>¿No tienes cuenta? Click aquí</span>
      </a>
    </div>
  </div>
</div>
