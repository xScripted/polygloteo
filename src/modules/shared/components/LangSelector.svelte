<script lang="ts">
  import { selectedLang } from '@/store'
  import { LANGS } from '@/modules/shared/constants/langs'

  const swapFlag = (lang: string) => {
    $selectedLang = lang

    localStorage.setItem('activeLang', lang)
  }

  $effect(() => {
    $selectedLang = localStorage.getItem('activeLang') || LANGS.JAPANESE
  })
</script>

<style lang="scss">
  .flags {
    display: flex;
    gap: 20px;
    padding: 40px 0;
    justify-content: center;

    .flag {
      transition: 0.3s ease;
      transform: scale(0.8);
      height: fit-content;
      opacity: 0.5;

      &.active {
        transform: scale(1);
        opacity: 1;
        box-shadow:
          rgba(56, 0, 42, 0.4) 0px 10px 20px,
          rgba(56, 0, 42, 0.3) 0px 7px 13px -3px;
      }

      img {
        display: block;
        width: 70px;
      }
    }
  }
</style>

<div class="flags">
  <button class="flag" onclick={() => swapFlag(LANGS.JAPANESE)} class:active={$selectedLang === LANGS.JAPANESE}>
    <img src="/assets/flags/japan.png" alt="" />
  </button>

  <button class="flag" onclick={() => swapFlag(LANGS.FRENCH)} class:active={$selectedLang === LANGS.FRENCH}>
    <img src="/assets/flags/france.png" alt="" />
  </button>
</div>
