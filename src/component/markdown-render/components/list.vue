<template>
	<component :is="item.ordered ? 'ol' : 'ul'">
		<li v-for="child in item.children">
			<render-list :items="child.children" />
		</li>
	</component>
</template>
<script setup lang="ts">
import { List } from "mdast";
import RenderList from "../render-list.vue";

const { item } = defineProps<{ item: List }>();
</script>
<style scoped>
ul,
ol {
	margin-left: 2em;
	background-color: rgba(0, 0, 0, 0.2);
	border-left: 2px inset #0f0;
	padding-left: 20px;
}
li {
	padding: 0.2em 0.5em;
}
</style>
