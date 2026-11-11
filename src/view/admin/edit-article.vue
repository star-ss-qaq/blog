<template>
	<div class="main">
		<div>
			<Input v-model="data.title" />
			<Select
				multiple
				v-model="data.tags"
				:options="tags.tags"
				value="id"
				label="name"
			/>
			<Button theme="primary" @click="handleSubmit">提交</Button>
		</div>
		<div class="content">
			<div class="content-main">
				<textarea v-model="data.content" />
				<div>
					<MarkdownRender :markdown="data.content || ''" />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Article } from "@/database/article";
import { Button, Input, Select } from "@thestarweb/ui";
import { ref } from "vue";
import MarkdownRender from "@/component/markdown-render/index.vue";
import { useTags } from "@/utils/use/tags";
import { useRequest } from "@thestarweb/star-framework-app-web-vue";
const { article } = defineProps<{
	article?: null | (Article & { tags: number[] });
}>();
const data = ref({ ...article });
const tags = useTags();
const request = useRequest();
function handleSubmit() {
	request.post("self:/admin/article/save", { body: data.value });
}
</script>
<style scoped>
.main {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.content {
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	align-items: stretch;
}
.content-main {
	width: 100%;
	display: flex;
	flex-direction: row;
	flex: 1 1 0;
}
.content-main > * {
	flex: 1 1 0;
}
textarea {
	resize: none;
}
</style>
