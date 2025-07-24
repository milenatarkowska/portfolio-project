<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="about_me">About</router-link>

    <!-- tu dodac kolejne karty -->
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
</style>
