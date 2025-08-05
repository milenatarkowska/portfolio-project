<template>
  <div class="opening-info">
    <div class="left-side">
      <h1>
        <b>{{ t('name') }}</b>
      </h1>
      <h3>{{ t('title') }}</h3>
      <p>
        {{ t('paragraph') }} <b>{{ t('academy') }}</b>
      </p>
    </div>
    <div class="right-side">
      <p><i class="fas fa-map-marker-alt"></i> {{ t('location') }}</p>
      <p>
        <i class="fas fa-envelope"></i>
        <a href="mailto:contactme@mtarkowska.dev"> contactme@mtarkowska.dev</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.opening-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 160px);
  flex: 1;
  padding: 2rem;
}

@media screen and (max-width: 768px){
  .opening-info{
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    align-content: center;
    padding: 1.5rem;
    min-height: calc(100vh - 140px);
    gap: 2rem;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 414px) {
  .opening-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    margin: 0 auto;
  }
  .right-side {
    align-self: flex-start;
  }
}
</style>
