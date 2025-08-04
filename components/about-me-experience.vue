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
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  @media (max-width: 768px) {
    .about-me-experience {
      flex-direction: column;
      align-items: stretch;
      padding: 2rem;
    }

    .right-title {
      order: -1;
      margin-left: 0;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .left-info {
      order: 0;
      margin-left: 0;
      text-align: center;
    }
  }
}
</style>
