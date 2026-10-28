<template>
	<RenderList :items="blocks.children" />
</template>
<script setup lang="ts">
import { fromMarkdown } from "mdast-util-from-markdown";
import { computed } from "vue";
import RenderList from "./render-list.vue";

const { markdown } = defineProps<{ markdown: string }>();
const blocks = computed(() =>
	fromMarkdown(markdown, undefined, { extensions: [] }),
);
</script>
