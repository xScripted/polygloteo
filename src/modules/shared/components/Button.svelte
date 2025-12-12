<script lang="ts">
  import type { SvgStore } from '@/modules/shared/interfaces/ISvgStore'
  import Svg from '@/modules/shared/components/Svg.svelte'

  interface Props {
    disabled?: boolean
    type?: 'main' | 'secondary' | 'circle' | 'danger'
    width?: string
    customClass?: string
    icon?: keyof SvgStore | ''
    loading?: boolean
    click?: any
    active?: boolean
    full?: boolean
    title?: string
    children?: import('svelte').Snippet
  }

  let {
    disabled = false,
    type = 'main',
    width = '',
    customClass = '',
    icon = '',
    loading = $bindable(),
    click = () => {},
    children,
    full = false,
    active,
    title,
  }: Props = $props()
</script>

<style lang="scss">
  .btn {
    transition: 0.3s ease;

    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    max-width: 100%;
    min-height: 50px;
    padding: 1px;

    padding: 10px 20px;
    text-decoration: none;
    user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

    :global(*) {
      color: inherit;
    }

    &:active {
      transform: scale(0.9);
    }

    &.full {
      width: 100%;
    }

    &:active,
    &:hover {
      outline: 0;
    }

    &[disabled] {
      cursor: unset;
      border: 1px solid var(--colorBorder);
      opacity: 0.3;
    }

    :global(svg) {
      transition: 0.3s ease;
      flex-shrink: 0;
      pointer-events: none;
    }

    &.btn-circle {
      border-radius: 100%;
      background-color: var(--colorPrimary);
      border: 1px solid var(--colorPrimary);
      aspect-ratio: 1 / 1;
      color: var(--colorText3);

      :global(svg) {
        fill: var(--colorSecondary) !important;
      }

      &:hover {
        background-color: var(--colorSecondary);
        color: var(--colorPrimary);
        border: 1px solid var(--colorPrimary);

        :global(svg) {
          fill: var(--colorPrimary) !important;
        }
      }
    }
    &.btn-main {
      background-color: var(--colorPrimary);
      color: var(--colorText3);
      border: 1px solid var(--colorPrimary);

      :global(svg) {
        fill: var(--colorText3);
        stroke: var(--colorText3);
      }

      &:hover {
        background-color: var(--colorSecondary);
        color: var(--colorPrimary);

        :global(svg) {
          fill: var(--colorPrimary);
          stroke: var(--colorPrimary);
        }
      }
    }

    &.btn-secondary {
      background-color: var(--colorSecondary);
      border: 1px solid var(--colorBorder);
      color: var(--colorText2);

      :global(svg) {
        fill: var(--colorText2);
      }

      &:hover {
        border: 1px solid var(--colorPrimary);
      }

      &.active {
        border: 1px solid var(--colorPrimary);
      }
    }

    &.btn-danger {
      border: 1px solid var(--colorError);
      background-color: var(--colorError);
      color: white;

      :global(svg) {
        fill: white;
        stroke: white;
      }

      &:hover {
        background-color: var(--colorSecondary);
        color: var(--colorError);
        border: 1px solid var(--colorError);

        :global(svg) {
          stroke: var(--colorError);
          fill: var(--colorError);
        }
      }
    }
  }
</style>

<button class="btn btn-{type} {customClass}" style={width ? `width: ${width}` : ''} onclick={click} {disabled} class:active class:full {title}>
  {#if loading}
    <Svg name="loading" className="svg-loading" />
  {:else if icon}
    <Svg name={icon} fill="var(--colorText3)" />
  {/if}
  {@render children?.()}
</button>
