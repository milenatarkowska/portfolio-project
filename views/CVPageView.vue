<template>
  <div class="CVPage">
    <section class="message">
      <h1><b>{{t('CVMessage')}}</b></h1>
    </section>
    <section class="buttons">
      {{t('CVpl')}}
      {{t('CVeng')}}
    </section>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
