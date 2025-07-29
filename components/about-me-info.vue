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
  flex-wrap: wrap;
}

.left-title {
  flex: 1;
  text-align: center;
}

.right-info {
  flex: 2;
  text-align: left;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .about-me {
    flex-direction: column;
    align-items: stretch;
    padding: 2rem;
  }

  .left-title {
    order: -1;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .right-info {
    order: 0;
    text-align: center;
  }
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
