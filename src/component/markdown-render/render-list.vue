<template>
	<RenderBlock v-for="block in items" :item="block" />
</template>
<script setup lang="ts">
import { Node } from "mdast";
import RenderBlock from "./render-block.vue";

const { items } = defineProps<{ items: Node[] }>();
</script>
