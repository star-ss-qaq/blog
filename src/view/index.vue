<template>
	<div class="index-list">
		<Block v-for="item in list">
			<a :href="`/p/${item.id}`">
				<h2>{{ item.title }}</h2>
			</a>
		</Block>
	</div>
</template>
<script setup lang="ts">
import Block from "@/component/block.vue";
import { Article } from "@/database/types.ts";

const { list } = defineProps<{ list: Article[] }>();
</script>
<style scoped>
.index-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
