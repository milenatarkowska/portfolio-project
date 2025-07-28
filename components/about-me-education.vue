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
.education{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  padding: 3rem;
  gap: 4rem;
}

.left-title {
  flex: 1;
  text-align: center;
}

.right-education {
  flex: 2;
  text-align: left;
  line-height: 1.7;
}


</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
