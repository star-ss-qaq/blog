<template>
	<span><RenderList :items="item.children" /></span>
</template>
<script setup lang="ts">
import { Emphasis } from "mdast";
import RenderList from "../render-list.vue";

const { item } = defineProps<{ item: Emphasis }>();
</script>
<style scoped>
span {
	font-style: italic;
}
</style>
