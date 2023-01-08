<script setup lang="ts">
const props = defineProps<{
  href: string;
  imgSrc: string;
  imgAlt: string;
}>();

const imageUrl = new URL(`/src/assets/${props.imgSrc}`, import.meta.url).href;
</script>

<template>
  <a :href="props.href" target="_blank">
    <img
      :src="imageUrl"
      class="h-16 p-1.5 will-change-[filter] transition-[filter] duration-300 logo"
      :alt="props.imgAlt"
    />
  </a>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 10px gray);
}
</style>
