<template>
	<component :is="isIndex ? 'h2' : 'h1'">{{ article.title }}</component>
	<div class="author">
		<img class="picture" />{{
			dayjs(article.time).format("YYYY-MM-DD HH:mm:ss")
		}}
		<template v-if="article.updateTime">
			(<img class="picture" />{{
				dayjs(article.updateTime).format("YYYY-MM-DD HH:mm:ss")
			}}已更新)
		</template>
	</div>
	<div>
		<TagComp size="mini">
			<component
				:is="isIndex ? 'span' : 'a'"
				class="tag"
				v-for="item in article.tags"
				:href="getTagUrl(item)"
			>
				{{ item.name }}
			</component>
		</TagComp>
	</div>
</template>
<script setup lang="ts">
import { Article, Tag } from "@/database/types";
import { getTagUrl } from "@/utils";
import { Tag as TagComp } from "@thestarweb/ui";
import dayjs from "dayjs";

const { article, isIndex } = defineProps<{
	article: Article & { tags: Tag[] };
	isIndex: boolean;
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
