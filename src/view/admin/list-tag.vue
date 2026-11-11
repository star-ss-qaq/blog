<template>
	<Button @click="editTag = {}" theme="primary">新增</Button>
	<ListBase v-bind="prop">
		<template #="tag">
			{{ tag.name }}
		</template>
	</ListBase>
	<!-- TODO 需要换成对话框 -->
	<div v-if="editTag">
		<Input v-model="editTag.name" />
		<Input v-model="editTag.eName" />
		<textarea v-model="editTag.info" />
		<Button theme="primary" @click="handleSubmit">提交</Button>
	</div>
</template>
<script setup lang="ts">
import ListBase from "@/component/list-base.vue";
import { Tag } from "@/database/types";
import { getTagUrl } from "@/utils";
import { useRequest } from "@thestarweb/star-framework-app-web-vue";
import { Button, Input } from "@thestarweb/ui";
import { ref } from "vue";

const prop = defineProps<{ data: Tag[]; total: number }>();
let editTag = ref<null | Partial<Tag>>(null);
const request = useRequest();
function handleSubmit() {
	if (!editTag.value?.name) return;
	request
		.post("self:/admin/tag/save", { body: editTag.value as any })
		.then(() => (editTag.value = null));
}
</script>
