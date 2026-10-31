<template>
	<div>
		<Block>
			<ArticleHeader :article="data" :is-index="false" />
			<div>
				<MarkdownRender :markdown="data.content" />
			</div>
		</Block>
	</div>
</template>
<script lang="ts" setup>
import Block from "@/component/block.vue";
import { Article, Tag } from "@/database/types";
import { useRoute } from "@thestarweb/star-framework-app-web-vue";
import MarkdownRender from "@/component/markdown-render/index.vue";
import dayjs from "dayjs";
import ArticleHeader from "@/component/article-header.vue";

const { data } = defineProps<{
	data: Article & { tags: Tag[] };
}>();
</script>
