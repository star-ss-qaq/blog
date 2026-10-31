<template>
	<img :src="item.url" :alt="item.alt || undefined" />
</template>
<script setup lang="ts">
import { Image } from "mdast";

const { item } = defineProps<{ item: Image }>();
</script>
<style scoped>
img {
	max-width: 100%;
}
</style>
