<template>
	<component
		v-for="block in blocks.children"
		:is="block.type in compMap ? compMap[block.type] : UnknownItem"
		:item="block"
	/>
</template>
<script setup lang="ts">
import { fromMarkdown } from "mdast-util-from-markdown";
import { computed } from "vue";
import { compMap } from "./comp-map";
import UnknownItem from "./unknown-item.vue";

const { markdown } = defineProps<{ markdown: string }>();
const blocks = computed(() =>
	fromMarkdown(markdown, undefined, { extensions: [] }),
);
</script>
