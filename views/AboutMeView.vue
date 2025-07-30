<template>
  <div
    ref="aboutMeRef"
    class="AboutMe h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
  >
    <section class="h-screen snap-start border-b border-transparent">
      <Info />
    </section>
    <section class="h-screen snap-start border-b border-transparent">
      <Technologies />
    </section>
    <section class="h-screen snap-start border-b border-transparent">
      <Education />
    </section>
    <section class="h-screen snap-start">
      <Experience />
    </section>
  </div>
</template>

<script setup>
import Info from "@/components/about-me-info.vue"
import Technologies from "@/components/about-me-technologies.vue"
import Education from "@/components/about-me-education.vue"
import Experience from "@/components/about-me-experience.vue"
</script>

<style scoped>

</style>
