<template>
	<Block>
		<ul>
			<li v-for="item in data">
				<slot v-bind="item"></slot>
			</li>
		</ul>
		<Pagination :total="total" :page="1" :pageSize="20" />
	</Block>
</template>
<script setup lang="ts" generic="T">
import Block from "@/component/block.vue";
// import { Pagination } from "@thestarweb/ui";
import { useRoute } from "@thestarweb/star-framework-app-web-vue";

const { data, total } = defineProps<{ data: T[]; total: number }>();
const route = useRoute();
const { finalRoute, params = {} } = route.value;
console.log(
	finalRoute &&
		Object.entries(params).reduce((acc, [key, value]) => {
			if (key === "page") return acc;
			return acc.replace(`:${key}`, value as any);
		}, finalRoute.path),
);
</script>
<style scoped>
li {
	overflow: hidden;
	border-bottom: solid 1px #555;
	padding: 4px 10px;
}
</style>
