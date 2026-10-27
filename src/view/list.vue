<template>
	<Block>
		<ul>
			<li v-for="item in data">
				<a class="p" :href="`/p/${item.id}`">
					<span>
						{{ item.title }}
					</span>
					<span>{{ dayjs(item.time).format("YYYY-MM-DD HH:mm:ss") }}</span>
				</a>
			</li>
		</ul>
	</Block>
</template>
<script setup lang="ts">
import Block from "@/component/block.vue";
import { Article } from "@/database/types";
import dayjs from "dayjs";
const { data, total } = defineProps<{ data: Article[]; total: number }>();
</script>
<style scoped>
li {
	overflow: hidden;
	border-bottom: solid 1px #555;
	padding: 4px 10px;
}
.p{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
