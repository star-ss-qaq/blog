<template>
	<p>
		<RenderList :items="item.children" />
	</p>
</template>
<script setup lang="ts">
import { Paragraph } from "mdast";
import RenderBlock from "../render-block.vue";
import RenderList from "../render-list.vue";

const { item } = defineProps<{ item: Paragraph }>();
</script>
<style scoped>
p {
	margin: 1em 0;
}
</style>
