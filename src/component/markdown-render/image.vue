<template>
	<img :src="item.url" :alt="item.alt || undefined" />
</template>
<script setup lang="ts">
import { Image } from "mdast";

const { item } = defineProps<{ item: Image }>();
</script>
