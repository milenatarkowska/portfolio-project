<template>
  <label class="swap">
    <input
      type="checkbox"
      @change="toggleLanguage"
      :checked="locale === 'en'"
    />
    <div class="swap-on">ENG</div>
    <div class="swap-off">PL</div>
  </label>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'pl' : 'en'
  localStorage.setItem('lang', locale.value)
}

</script>

