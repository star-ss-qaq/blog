<template>
	<pre>
        <ol>
            <li v-for="item in item.value.split('\n')">{{ item }}</li>
        </ol>
    </pre>
</template>
<script setup lang="ts">
import { Code } from "mdast";

const { item } = defineProps<{ item: Code }>();
</script>
<style scoped>
pre {
	white-space: inherit;
	background-color: rgba(0, 0, 0, 0.2);
	padding: 0;
	padding-left: 40px;
	overflow: auto;
	line-height: 20px;
	color: #fff;
	font-size: 12px;
}
pre ol {
	margin: 0;
	background-color: rgba(0, 0, 0, 0);
	border-left: 2px none #0f0;
}
pre li {
	/* margin: 0 -2px; */
	padding: 1px 10px;
	border-left: 2px inset #08f;
	left: -2px;
	/*overflow: auto;*/
	/*white-space: pre-wrap;*/
	white-space: pre;
}
pre li:after {
	/*display: block;*/
	content: " ";
}
pre li:nth-child(odd) {
	background-color: rgba(0, 0, 0, 0.2);
}
</style>
