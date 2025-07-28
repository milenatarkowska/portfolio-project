<template>
  <div class="about-me">
    <section class="left-title">
      <h1><b>{{ t('aboutMe') }}</b></h1>
    </section>
    <section class="right-info">
      <p>
        {{t('aboutFirstSentence')}}
        <br><br>
        {{t('aboutSecondSentence')}}
        <br><br>
        {{t('aboutThirdSentence')}}
        <br><br>
        {{t('aboutFourthSentence')}}
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-me{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  padding: 3rem;
  gap: 4rem;
}

.left-title {
  flex: 1;
  text-align: center;
}

.right-info {
  flex: 2;
  text-align: left;
  line-height: 1.7;
  font-size: 1.1rem;
}


</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
