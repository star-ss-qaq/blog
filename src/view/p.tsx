import ArticleHeader from "@/component/article-header";
import Block from "@/component/block";
import type { Article, Tag } from "@/database/types";
import React from "react";
import MarkdownRender from "@/component/markdown-render/index";

{
	/* <template>
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
import MarkdownRender from "@/component/markdown-render/index.vue";
import dayjs from "dayjs";
import ArticleHeader from "@/component/article-header.vue";

const { data } = defineProps<{
	data: Article & { tags: Tag[] };
}>();
</script> */
}
export default function ({ data }: { data: Article & { tags: Tag[] } }) {
	return (
		<div>
			<Block>
				<ArticleHeader article={data} isIndex={false} />
				<div>
					<MarkdownRender markdown={data.content} />
				</div>
			</Block>
		</div>
	);
}
