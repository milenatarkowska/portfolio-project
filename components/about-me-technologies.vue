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
  min-height: calc(100vh - 160px);
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0 auto;
}

.left-technologies {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
}

.right-title {
  flex: 1;
  text-align: center;
  line-height: 1.5;
}
.tag-cloud {
  width: 420px;
  height: 420px;
  position: relative;
}

.tag-cloud > * {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 1024px) {
  .technologies {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .right-title h1 {
    font-size: 2.2rem;
  }

  .tag-cloud {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 768px) {
  .technologies {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    min-height: calc(100vh - 140px);
    gap: 2rem;
  }

  .right-title {
    width: 100%;
  }

  .right-title h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .left-technologies {
    width: 100%;
  }

  .tag-cloud {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .technologies {
    padding: 1rem;
    gap: 1.5rem;
  }

  .right-title h1 {
    font-size: 1.8rem;
  }

  .tag-cloud {
    width: 280px;
    height: 280px;
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
  const isMobile = window.innerWidth <= 768
  const radius = isMobile ? 150 : 250

  TagCloud(tagCloud.value, texts, {
    radius: radius,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
  })
})
</script>
