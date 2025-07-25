<template>
  <nav class="navbar">
    <router-link to="/">{{ t('home') }}</router-link>
    <router-link to="about_me">{{ t('about') }}</router-link>

    <!-- tu dodac kolejne karty -->
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
