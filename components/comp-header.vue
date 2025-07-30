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
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
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
