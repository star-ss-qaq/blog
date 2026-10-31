<template>
	<Block>
		<h1>{{ tag.name }}</h1>
		<div v-if="tag.info">{{ tag.info }}</div>
	</Block>
	<ListArticle v-bind="prop" />
</template>
<script setup lang="ts">
import Block from "@/component/block.vue";
import ListArticle from "@/component/list-article.vue";
import { Article, Tag } from "@/database/types";

const { tag, ...prop } = defineProps<{
	tag: Tag;
	data: Article[];
	total: number;
}>();
</script>
