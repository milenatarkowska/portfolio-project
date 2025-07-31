<template>
  <div class="CVPage">
    <section class="message">
      <h1><b>{{t('CVMessage')}}</b></h1>
    </section>
    <section class="buttons">
      <button class="btn btn-xl" @click="download('Milena_Tarkowska_CV_pl.pdf')">{{t('CVpl')}}</button>
      <button class="btn btn-xl" @click="download('Milena_Tarkowska_CV_eng.pdf')">{{t('CVeng')}}</button>
    </section>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

function download(fileName) {
  window.open(`/pdf/${fileName}`,'_blank')
}
</script>

<style scoped>
.CVPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 2rem; /* odstęp między sekcjami */
  text-align: center;
}

.buttons {
  display: flex;
  gap: 1.5rem; /* odstęp między przyciskami */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.btn-xl{
  background-color: var(--secondary);
  border: var(--secondary);
}
.btn-xl:hover{
  background-color: var(--accent);
}
</style>
