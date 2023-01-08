<script setup lang="ts">
import { useCounterStore } from '../stores/counter.store';

defineProps<{ msg: string }>();

const counterStore = useCounterStore();

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-lg">{{ msg }}</h1>

    <p>
      {{ t('homepage.recommendedIdeSetup') }}
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p v-html="t('homepage.seeForMoreInfo')" />

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <div class="my-5">
      <button
        type="button"
        class="ring-2 dark:ring-1 px-3 py-1 rounded ring-green-300 hover:ring-2 hover:ring-green-500 transition text-green-500"
        @click="counterStore.increment"
      >
        {{ t('homepage.countIs') }}: {{ counterStore.count }}
      </button>
    </div>

    <p v-html="t('homepage.toTestHotModule')" />
  </div>
</template>
