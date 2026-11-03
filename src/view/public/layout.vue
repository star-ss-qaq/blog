<template>
	<Page :menu="menu" class="app-main">
		<div class="app-body">
			<sf-route />
		</div>
		<footer>
			<p>{{ version }} build at {{ buildAt }}</p>
			<p>
				星星站点博客&copy;2013-{{ new Date().getFullYear() }} 星星站点
				保留所有权利
			</p>
		</footer>
	</Page>
</template>
<script lang="ts" setup>
import { Page } from "@thestarweb/ui";
const menu = [
	{
		path: "/",
		title: "首页",
	},
	{ path: "https://www.thestarweb.cn", title: "主站" },
	{ path: "/list/1", title: "文章列表" },
	{ path: "/tag/list/1", title: "分类列表" },
];
const version = process.env.VERSION;
const buildAt = process.env.BUILD_AT;
</script>
<style scoped>
.app-main {
	height: 100%;
	background: linear-gradient(
			180deg,
			#030718 0%,
			#0a1b45 35%,
			#2a1f5c 70%,
			#5e2f71 100%
		)
		no-repeat;
	overflow: auto;
}
:deep(.su-page--header) {
	padding: 0 calc((100% - var(--g-width)) / 2);
}
:deep(.su-page--header a) {
	color: #e6eaf0;
}
footer {
	text-align: center;
	margin-bottom: 50px;

	color: #fff;
}
.app-body {
	margin: 50px auto;
	width: var(--g-width);
}
</style>
