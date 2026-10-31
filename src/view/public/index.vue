<template>
	<div class="index-list">
		<Block v-for="item in list">
			<a :href="`/p/${item.id}`">
				<ArticleHeader :article="item" is-index />
			</a>
		</Block>
	</div>
</template>
<script setup lang="ts">
import ArticleHeader from "@/component/article-header.vue";
import Block from "@/component/block.vue";
import { Article, Tag } from "@/database/types.ts";
import dayjs from "dayjs";

const { list } = defineProps<{ list: (Article & { tags: Tag[] })[] }>();
</script>
<style scoped>
.index-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
