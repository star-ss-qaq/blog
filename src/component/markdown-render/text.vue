<template>
	<span>{{ item.value }}</span>
</template>
<script lang="ts" setup>
import { Text } from "mdast";

const { item } = defineProps<{ item: Text }>();
</script>
