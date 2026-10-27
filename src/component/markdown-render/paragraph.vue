<template>
	<p>
		<RenderBlock v-for="block in item.children" :item="block" />
	</p>
</template>
<script setup lang="ts">
import { Paragraph } from "mdast";
import RenderBlock from "./render-block.vue";

const { item } = defineProps<{ item: Paragraph }>();
</script>
