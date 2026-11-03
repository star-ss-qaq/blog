<template>
	<Card class="block">
		<slot></slot>
	</Card>
</template>
<script setup lang="ts">
import { Card } from '@thestarweb/ui';
</script>
<style>
.block {
	background-color: #aaaa;
	padding: 20px;
	margin: 10px;
}
</style>
