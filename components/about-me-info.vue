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
.about-me {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 160px);
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  line-height: 1.5;
}

.left-title {
  flex: 1;
  text-align: center;
  min-width: 250px;
}
.right-info {
  flex: 2;
  text-align: left;
  line-height: 1.7;
  min-width: 300px;
}

@media (max-width: 1024px) {
  .about-me {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .left-title h1 {
    font-size: 2.2rem;
  }

  .right-info p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .about-me {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    min-height: calc(100vh - 160px);
    gap: 2rem;
  }

  .left-title {
    order: -1;
    margin-bottom: 0;
  }

  .left-title h1 {
    font-size: 2rem;
  }

  .right-info {
    text-align: center;
    width: 100%;
  }

  .right-info p {
    text-align: center;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about-me {
    padding: 1rem;
    gap: 1.5rem;
    min-height: calc(100vh - 140px);
  }

  .left-title h1 {
    font-size: 1.8rem;
  }

  .right-info p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .right-info br {
    display: block;
    content: "";
    margin-bottom: 0.8rem;
  }
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
