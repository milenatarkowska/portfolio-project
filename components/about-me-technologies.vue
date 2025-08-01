<template>
  <div class="technologies">
    <section class="left-technologies">
      <div ref="tagCloud" class="tag-cloud"></div>
    </section>
    <section class="right-title">
      <h1>
        <b>{{ t('technologies') }}</b>
      </h1>
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
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .technologies {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 2rem;
  }

  .right-title {
    order: -1;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  .left-technologies {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .tag-cloud {
    width: 280px;
    height: 280px;
    position: relative;
    transform: translateX(0);
  }

  .tag-cloud > * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { onMounted, ref } from 'vue'
import TagCloud from 'TagCloud'

const tagCloud = ref(null)
const texts = [
  'Java',
  'Python',
  'JavaScript',
  'C++',
  'HTML',
  'CSS',
  'Linux',
  'GitHub',
  'Vue',
  'Docker',
]

onMounted(() => {
  TagCloud(tagCloud.value, texts, {
    radius: 250,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
  })
})
</script>
