<script lang="ts">
  const items = [
    {
      label: '',
      href: '/dashboard',
    },
  ]
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
    background-color: rgba(241, 236, 245, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 8;

    .g-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        &:hover {
          color: var(--colorPrimary);
        }
      }
    }

    ul {
      display: flex;
      gap: 20px;
    }
  }
</style>

<div class="ghost"></div>
<nav class="menu">
  <div class="g-wrapper">
    <ul>
      {#each items as item}
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>

    <div class="right"></div>
  </div>
</nav>
