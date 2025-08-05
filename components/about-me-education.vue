<template>
  <div class="education">
    <section class="left-title">
      <h1><b>{{ t('education') }}</b></h1>
    </section>
    <section class="right-education">
      <div class="PJATK-bachelor">
        <div class="main-info">
          <h3><b>{{t('university')}}</b></h3>
          <h5>{{t('degree')}}</h5>
        </div>
        <div class="place-and-time">
          <p><i class="fas fa-map-marker-alt"></i> {{t('location')}}
            <br>
            <i class="fa-solid fa-calendar"></i> 2023 - 2027
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.education {
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

.left-title {
  flex: 1;
  text-align: center;
  min-width: 250px;
}
.right-education {
  flex: 1;
  text-align: left;
  line-height: 1.6;
  min-width: 300px;
}

@media (max-width: 1024px) {
  .education {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .left-title h1 {
    font-size: 2.2rem;
  }

  .main-info h3 {
    font-size: 1.3rem;
  }

  .main-info h5 {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .education {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    min-height: calc(100vh - 140px);
  }

  .left-title {
    order: -1;
    margin-top: 10rem;
    margin-bottom: -6rem;
  }

  .left-title h1 {
    font-size: 2rem;
  }

  .right-education {
    width: 100%;
    text-align: center;
    margin-top: -6rem;
  }
}

@media (max-width: 480px) {
  .education {
    padding: 1rem;
    gap: 1.5rem;
  }

  .left-title h1 {
    font-size: 1.8rem;
  }

  .main-info h3 {
    font-size: 1.2rem;
  }

  .main-info h5 {
    font-size: 0.95rem;
  }

  .place-and-time p {
    font-size: 0.95rem;
  }
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
