<template>
  <div class="opening-info">
    <div class="left-side">
      <h1><b>{{ t('name') }}</b></h1>
      <h3>{{ t('title') }}</h3>
      <p>{{ t('paragraph') }} <b>{{ t('academy') }}</b></p>
    </div>
    <div class="right-side">
      <p><i class="fas fa-map-marker-alt"></i> {{ t('location') }}</p>
      <p>
        <i class="fas fa-envelope"></i>
        <a :href="'mailto:' + t('email')"> {{ t('email') }}</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.opening-info{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 2rem;
}

</style>
