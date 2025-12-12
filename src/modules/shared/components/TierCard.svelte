<script lang="ts">
  let { tier = 0, phrase } = $props()

  const tiers = ['I', 'II', 'III', 'IV', 'V']
</script>

<style lang="scss">
  .tier-card {
    transition: 0.3s ease;
    position: relative;
    overflow: hidden;
    max-width: 300px;
    height: 180px;
    border-radius: var(--radius);
    background-color: rgba(255, 255, 255, 1);
    box-shadow:
      rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    &:hover {
      transform: rotateZ(-2deg);
      box-shadow:
        rgba(56, 0, 42, 0.4) 0px 2px 4px,
        rgba(56, 0, 42, 0.3) 0px 7px 13px -3px,
        rgba(56, 0, 42, 0.2) 0px -3px 0px inset;

      .front {
        opacity: 0;
      }
    }

    &__content {
      position: relative;
      height: 100%;
      padding: 10px;
      z-index: 2;
      backdrop-filter: blur(0px);
      font-size: 20px;

      .front,
      .back {
        transition: 0.3s ease;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        height: fit-content;
        top: 50%;
        left: 50%;
        background-color: white;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 100%;
        padding: 10px;
        text-wrap: balance;
      }

      .front {
        font-weight: bold;
        color: var(--colorPrimary);
      }

      .tier {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: var(--colorPrimary);
      }
    }
  }
</style>

<div class="tier-card">
  <div class="tier-card__content">
    <div class="tier">{tiers[tier - 1]}</div>
    <p class="back">{phrase.translate}</p>
    <p class="front">{phrase.target}<br />{phrase.targetHelper}</p>
  </div>
</div>
