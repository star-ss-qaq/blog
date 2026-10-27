<template>
	<span>unknown item {{ item.type }}</span>
</template>
<script lang="ts" setup>
import { Node } from "mdast";

const { item } = defineProps<{ item: Node }>();
console.warn("unknown markdown", item);
</script>
