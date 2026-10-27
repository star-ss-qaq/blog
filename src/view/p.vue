<template>
	<div>
		<Block>
			<h1>{{ data.title }}</h1>
			<div class="author">
				<img class="picture" />{{
					dayjs(data.time).format("YYYY-MM-DD HH:mm:ss")
				}}
				<template v-if="data.updateTime">
					(<img class="picture" />{{
						dayjs(data.updateTime).format("YYYY-MM-DD HH:mm:ss")
					}}已更新)
				</template>
			</div>
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
import MarkdownRender from '@/component/markdown-render/index.vue';
import dayjs from "dayjs";


const { data } = defineProps<{
	data: Article;
	tags: Tag[];
}>();
</script>
<style scoped>
.author {
	font-size: 0.8rem;
}
.picture {
	height: 0.8rem;
	width: 0.8rem;
}
</style>
