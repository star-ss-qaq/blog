<template>
	<ListBase v-bind="arg">
		<template #="item">
			<a class="p" :href="`/p/${item.id}`">
				<span>
					{{ item.title }}
				</span>
				<span>{{ dayjs(item.time).format("YYYY-MM-DD HH:mm:ss") }}</span>
			</a>
		</template>
	</ListBase>
</template>
<script setup lang="ts">
import { Article } from "@/database/types";
import dayjs from "dayjs";
import ListBase from "./list-base.vue";
const arg = defineProps<{ data: Article[]; total: number }>();
</script>
<style scoped>
.p {
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>
