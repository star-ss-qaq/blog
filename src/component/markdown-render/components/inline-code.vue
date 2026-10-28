<template>
	<span>{{ item.value }}</span>
</template>
<script setup lang="ts">
import { InlineCode } from "mdast";

const { item } = defineProps<{ item: InlineCode }>();
</script>
<style scoped>
span {
	margin: 2px;
	font-style: oblique;
}
</style>
