<template>
	<div class="block">
		<slot></slot>
	</div>
</template>
<script setup lang="ts">
import { Card } from "@thestarweb/ui";
</script>
<style>
.block {
	background-color: #aaaa;
	padding: calc(var(--star-ui-default-padding) * 2);
	margin: var(--star-ui-default-padding);
	border-radius: var(--star-ui-border-radius-base);
}
</style>
