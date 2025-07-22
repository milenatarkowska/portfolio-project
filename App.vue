<template>
  <div class="app">
    <Header />
    <main class="main">
      <HeroPageView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/comp-header.vue'
import Footer from './components/comp-footer.vue'
import HeroPageView from '@/views/HeroPageView.vue'
</script>

<style scoped>
.app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main{
  display: flex;
  flex: 1;
  height: 100%;
}
</style>
