<template>
	<ListArticle v-bind="prop" />
</template>
<script setup lang="ts">
import ListArticle from "@/component/list-article.vue";
import { Article } from "@/database/types";

const prop = defineProps<{ data: Article[]; total: number }>();
</script>
