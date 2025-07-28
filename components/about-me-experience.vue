<template>
  <div class="about-me-experience">
    <section class="left-info">
      <div class="MHP">
        <h3>
          <b>{{ t('mhp') }}</b>
        </h3>
        <p>
          <i class="fas fa-map-marker-alt"></i> {{ t('location') }}
          <br>
          <i class="fa-solid fa-calendar"></i> {{ t('mhpTime') }}
        </p>
      </div>
      <div class="MHP-description">
        <p>{{t('mhpDesc')}}</p>
      </div>
    </section>
    <section class="right-title">
      <h1>
        <b>{{ t('experience') }}</b>
      </h1>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.about-me-experience {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  padding: 3rem;
  gap: 3rem;
}

.left-info {
  flex: 1;
  text-align: left;
  margin-left: 3rem;
}

.right-title {
  flex: 2;
  text-align: center;
  line-height: 1.7;
  margin-left: 3rem;
}
</style>
