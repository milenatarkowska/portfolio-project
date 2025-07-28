<template>
  <div class="technologies">
    <section class="left-technologies">
      <div ref="tagCloud" class="tag-cloud"></div>
    </section>
    <section class="right-title">
      <h1><b>{{t('technologies')}}</b></h1>
    </section>
  </div>
</template>

<style scoped>
.technologies {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  padding: 3rem;
  gap: 3rem;
}

.left-technologies {
  flex: 1;
  text-align: center;
}

.right-title {
  flex: 2;
  text-align: center;
  line-height: 1.7;
  margin-left: 3rem;
}
.tag-cloud {
  width: 400px;
  height: 400px;

}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()


import { onMounted, ref } from 'vue'
import TagCloud from 'tagcloud'

const tagCloud = ref(null)
const texts = ['Java', 'Python', 'JavaScript', 'C++', 'HTML', 'CSS', 'Linux', 'GitHub', 'Vue']

onMounted(() => {
  TagCloud(tagCloud.value, texts, {
    radius: 250,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true
  })
})
</script>
