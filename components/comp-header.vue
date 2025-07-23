<template>
  <div class="header">
    <div class="navbar">
      <NavBar />
    </div>
    <div class="switch">
      <ColorModeSwitch />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0.5rem;
}
</style>

<script setup>
import ColorModeSwitch from "./color-modes-switch.vue";
import NavBar from "./comp-navbar.vue";
</script>
