<template>
	<a :href="item.url" target="_blank">
		<RenderList :items="item.children" />
	</a>
</template>
<script lang="ts" setup>
import { Link } from "mdast";
import RenderList from "../render-list.vue";

const { item } = defineProps<{ item: Link }>();
</script>
