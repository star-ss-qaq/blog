<template>
	<ListBase v-bind="prop">
		<template #="tag">
			<a :href="getTagUrl(tag)">{{ tag.name }}</a>
		</template>
	</ListBase>
</template>
<script setup lang="ts">
import ListBase from "@/component/list-base.vue";
import { Tag } from "@/database/types";
import { getTagUrl } from "@/utils";

const prop = defineProps<{ data: Tag[]; total: number }>();
</script>
