<template>
	<Block>
		<ul>
			<li v-for="item in data">
				<slot v-bind="item"></slot>
			</li>
		</ul>
		<Pagination :total="total" :page="+params.page" :pageSize="20" :url="url" />
	</Block>
</template>
<script setup lang="ts" generic="T">
import Block from "@/component/block.vue";
import { Pagination } from "@thestarweb/ui";
import { useRoute } from "@thestarweb/star-framework-app-web-vue";
import { computed } from "vue";

const { data, total } = defineProps<{ data: T[]; total: number }>();
const route = useRoute();
const { finalRoute, params = {} } = route.value;

const url = computed(() => {
	return (
		finalRoute &&
		Object.entries(params).reduce((acc, [key, value]) => {
			if (key === "page") return acc;
			return acc.replace(`:${key}`, value as any);
		}, finalRoute.path)
	);
});
</script>
<style scoped>
ul {
	padding: 0;
	margin: 0;
}
li {
	overflow: hidden;
	border-bottom: solid 1px #555;
	padding: 4px 10px;
}
.star-ui-pagination {
	margin-top: 20px;
	justify-content: center;
}
</style>
