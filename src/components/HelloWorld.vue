<script setup lang="ts">
import { useCounterStore } from '../stores/counter.store';

defineProps<{ msg: string }>();

const counterStore = useCounterStore();
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-lg">{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

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
        count is: {{ counterStore.count }}
      </button>
    </div>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>
