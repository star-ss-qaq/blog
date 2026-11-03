<template>
	<component :is="`h${item.depth + 1}`">
		<RenderList :items="item.children" />
	</component>
</template>
<script setup lang="ts">
import { Heading } from "mdast";
import RenderList from "../render-list.vue";

const { item } = defineProps<{ item: Heading }>();
</script>