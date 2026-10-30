<template>
	<span><RenderList :items="item.children" /></span>
</template>
<script setup lang="ts">
import { Strong } from "mdast";
import RenderList from "../render-list.vue";

const { item } = defineProps<{ item: Strong }>();
</script>
<style scoped>
span {
	font-weight: 800;
}
</style>
