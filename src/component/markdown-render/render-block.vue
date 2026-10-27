<template>
	<component
		:is="item.type in compMap ? compMap[item.type] : UnknownItem"
		:item="item"
	/>
</template>
<script setup lang="ts">
import { Node } from "mdast";
import { compMap } from "./comp-map";
import UnknownItem from "./unknown-item.vue";
const { item } = defineProps<{ item: Node }>();
</script>
