<script setup lang="ts">
import LogoViewLink from './components/LogoViewLink.vue';

console.log(
  '[App.vue]',
  `Hello world from Electron ${process.versions.electron}!`
);

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { t, availableLocales, locale } = useI18n();

function toggleLocales() {
  // change to some real logic
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
}
</script>

<template>
  <div
    id="app"
    class="max-w-5xl mx-auto px-4 py-5 dark:bg-slate-800 dark:text-gray-200 min-h-screen"
  >
    <div class="mb-6 flex items-center justify-between">
      <button @click="toggleDark()">
        <span class="ml-2">
          {{ isDark ? `🌙 ${t('common.dark')}` : `💡 ${t('common.light')}` }}
          {{ t('common.theme') }}
        </span>
      </button>

      <button @click="toggleLocales">
        <span>{{ t('common.language') }}: </span>
        <span class="text-green-600">{{ locale }}</span>
      </button>
    </div>

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
      <LogoViewLink
        href="https://tailwindcss.com/"
        img-src="tailwindcss.png"
        img-alt="Tailwind CSS logo"
      />
      <LogoViewLink
        href="https://eslint.org/"
        img-src="eslint.png"
        img-alt="Eslint logo"
      />
      <LogoViewLink
        href="https://prettier.io/"
        img-src="prettier.png"
        img-alt="Prettier logo"
      />
      <LogoViewLink
        href="https://vueuse.org/"
        img-src="vueuse.svg"
        img-alt="VueUse logo"
      />
    </div>

    <p class="text-center mt-6 flex items-center justify-center">
      <router-link
        to="/home"
        class="block mx-4 px-2 py-1 border-b-2 border-green-300 hover:border-green-500 transition"
      >
        {{ t('homepage.goToHome') }}
      </router-link>
      <router-link
        to="/about"
        class="block mx-4 px-2 py-1 border-b-2 border-green-300 hover:border-green-500 transition"
      >
        {{ t('aboutPage.goToAbout') }}
      </router-link>
    </p>

    <router-view class="my-5" />

    <div class="flex items-center justify-center mt-4">
      <span v-html="t('footer.placeStaticFiles')" />
      <img src="/node.svg" alt="Node logo" class="w-10" />
    </div>
  </div>
</template>
