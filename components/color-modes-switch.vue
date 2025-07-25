<template>
  <label class="flex cursor-pointer gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
      />
    </svg>
    <input
      type="checkbox"
      class="toggle theme-controller"
      v-model="isDark"
      @change="handleThemeChange"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </label>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const isDark = ref(false);

const applyTheme = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const handleThemeChange = () => {
  applyTheme(isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDark.value = systemPrefersDark;
    localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light');
  }

  applyTheme(isDark.value);

  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystemThemeChange = (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches;
      applyTheme(e.matches);
    }
  };

  colorSchemeQuery.addEventListener('change', handleSystemThemeChange);

  return () => {
    colorSchemeQuery.removeEventListener('change', handleSystemThemeChange);
  };
});

watch(isDark, (newVal) => {
  applyTheme(newVal);
  localStorage.setItem('theme', newVal ? 'dark' : 'light');
});
</script>
