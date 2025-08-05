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

<style scoped>
.about-me-experience {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 160px);
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0 auto;
}

.left-info {
  flex: 1;
  text-align: left;
  min-width: 300px;
}

.right-title {
  flex: 1;
  text-align: center;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .about-me-experience {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .right-title h1 {
    font-size: 2.2rem;
  }

  .MHP h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .about-me-experience {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    min-height: calc(100vh - 140px);
    gap: 2rem;
  }

  .right-title {
    width: 100%;
    margin-top: 4rem;
    margin-bottom: -4rem;
  }

  .right-title h1 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  .left-info {
    width: 100%;
    text-align: center;
    margin-top: -4rem;
  }
}

@media (max-width: 480px) {
  .about-me-experience {
    padding: 1rem;
    gap: 1.5rem;
    margin-top: 4rem;
    margin-bottom: -4rem;
  }

  .right-title h1 {
    font-size: 1.8rem;
    margin-bottom: 0;
  }

  .MHP h3 {
    font-size: 1.2rem;
  }

  .MHP p, .MHP-description p {
    font-size: 0.95rem;
  }
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
