<script setup lang="ts">
import LogoViewLink from './components/LogoViewLink.vue';

console.log(
  '[App.vue]',
  `Hello world from Electron ${process.versions.electron}!`
);
</script>

<template>
  <div id="app" class="max-w-5xl mx-auto px-4 py-5">
    <div class="flex flex-wrap gap-5 items-center justify-center">
      <LogoViewLink
        href="https://www.electronjs.org/"
        img-src="electron.svg"
        img-alt="Electron logo"
      />
      <LogoViewLink
        href="https://vitejs.dev/"
        img-src="vite.svg"
        img-alt="Vite logo"
      />
      <LogoViewLink
        href="https://vuejs.org/"
        img-src="vue.svg"
        img-alt="Vue logo"
      />
      <LogoViewLink
        href="https://pinia.vuejs.org/"
        img-src="pinia.svg"
        img-alt="Pinia logo"
      />
    </div>

    <p class="text-center mt-6 flex items-center justify-center">
      <router-link
        to="/home"
        class="block mx-4 px-2 py-1 border-b-2 border-green-300 hover:border-green-500 transition"
      >
        Go to Home
      </router-link>
      <router-link
        to="/about"
        class="block mx-4 px-2 py-1 border-b-2 border-green-300 hover:border-green-500 transition"
      >
        Go to About
      </router-link>
    </p>

    <router-view class="my-5" />

    <div class="flex items-center justify-center mt-4">
      Place static files into the <code>/public</code> folder
      <img src="/node.svg" alt="Node logo" class="w-10" />
    </div>
  </div>
</template>
