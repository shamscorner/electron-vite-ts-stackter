<script setup lang="ts">
console.log(
  '[App.vue]',
  `Hello world from Electron ${process.versions.electron}!`
);
</script>

<template>
  <div id="app">
    <a href="https://www.electronjs.org/" target="_blank">
      <img
        src="./assets/electron.svg"
        class="logo electron"
        alt="Electron logo"
      />
    </a>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <img src="./assets/pinia.svg" class="logo Pinia" alt="Pinia logo" />
    </a>
  </div>

  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/home" class="routerLink">Go to Home</router-link>
    <router-link to="/about" class="routerLink">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view />

  <div class="flex-center">
    Place static files into the <code>/public</code> folder
    <img style="width: 5em" src="/node.svg" alt="Node logo" />
  </div>
</template>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9feaf9);
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.routerLink {
  margin: 0 10px;
}
</style>
