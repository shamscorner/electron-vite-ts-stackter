<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';

const { t } = useI18n();
</script>

<template>
  <div class="text-center">
    <h1 class="text-2xl mb-3">
      {{ t('pageTitles.home') }}
    </h1>
    <HelloWorld
      msg="Electron + Vite + Vue + Pinia + Vue-Router + Tailwind CSS + Eslint + Prettier"
    />
  </div>
</template>
