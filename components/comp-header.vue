<template>
  <div class="header">
    <div class="navbar">
      <NavBar />
    </div>
    <div class="settings">
      <ColorModeSwitch />
     <LangChangeComp />
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
.settings {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
</style>

<script setup>
import ColorModeSwitch from "./color-modes-switch.vue";
import NavBar from "./comp-navbar.vue";
import LangChangeComp from "./lang-change-comp.vue";
</script>
