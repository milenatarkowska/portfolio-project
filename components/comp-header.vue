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
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>

<script setup>
import ColorModeSwitch from "./color-modes-switch.vue";
import NavBar from "./comp-navbar.vue";
</script>
