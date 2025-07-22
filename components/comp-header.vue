<template>
  <div class="header">
    <ColorModeSwitch />
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
</script>
