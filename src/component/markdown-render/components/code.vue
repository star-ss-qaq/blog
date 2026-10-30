<template>
	<pre>
        <ol>
            <li v-for="tokens in lines">
				<span v-for="token in tokens" :class="token.className">{{ token.value }}</span>
			</li>
        </ol>
    </pre>
</template>
<script setup lang="ts">
import type { HighlightToken, Highlighter } from "@tanstack/highlight";
import { Code } from "mdast";
import { computed, onMounted, shallowRef } from "vue";

const { item } = defineProps<{ item: Code }>();
const langMap: Record<string, string> = { typescript: "ts", javascript: "js" };
const highlighter = shallowRef<Highlighter>();
const fName = computed(() =>
	item.lang ? langMap[item.lang] || item.lang : "",
);
const lines = computed(() => {
	if (highlighter.value) {
		const { tokens } = highlighter.value.highlight(item.value, {
			lang: fName.value,
		});
		let top: HighlightToken[] = [];
		const res = [top];
		tokens.forEach((i) => {
			const list = i.value.split("\n");
			if (list.length > 1) {
				const text = list.shift()!;
				if (text) {
					top.push({ ...i, value: text });
				}
				while (list.length) {
					top = [];
					res.push(top);
					const text = list.shift()!;
					if (text) {
						top.push({ ...i, value: text });
					}
				}
			} else {
				top.push(i);
			}
			return list;
		});
		return res;
	}
	return item.value.split("\n").map((i): HighlightToken[] => [{ value: i }]);
});
onMounted(() => {
	if (fName.value) {
		const name = `https://esm.unpkg.com/@tanstack/highlight@1.2.0/dist/languages/${fName.value}.js`;
		Promise.all([
			// import("@tanstack/highlight"),
			// @ts-ignore
			import("https://esm.unpkg.com/@tanstack/highlight@1.2.0/dist/core.js"),
			// import("@tanstack/highlight/languages/js").then((res) => res.js),
			import(name),
		]).then(([{ createHighlighter }, lang]) => {
			highlighter.value = createHighlighter({
				languages: [lang[fName.value]],
			});
		});
		// const langJS = `https://unpkg.com/@highlightjs/cdn-assets@11.12.0/es/languages/${langMap[item.lang] || item.lang}.min.js`;
		// Promise.all([
		// 	import("https://unpkg.com/@highlightjs/cdn-assets@11.12.0/es/highlight.min.js"),
		// 	import(langJS),
		// ])
		// 	.then(([hljs, lang]) => {
		// 		hljs.default.registerLanguage(item.lang, lang.default);
		// 		const res = hljs.default.highlight(item.value, { language: "cpp" });
		// 		console.log(res, lang);
		// 	})
		// 	.catch(() => {});
	}
});
</script>
<style scoped>
pre {
	white-space: inherit;
	background-color: rgba(0, 0, 0, 0.6);
	padding: 0;
	padding-left: 40px;
	overflow: auto;
	line-height: 20px;
	color: #c9d1d9;
	font-size: 12px;
}
pre ol {
	margin: 0;
	background-color: rgba(0, 0, 0, 0);
	border-left: 2px none #0f0;
}
pre li {
	color: #fff;
	/* margin: 0 -2px; */
	padding: 1px 10px;
	border-left: 2px inset #08f;
	left: -2px;
	/*overflow: auto;*/
	/*white-space: pre-wrap;*/
}
pre li span {
	white-space: pre;
	color: #fff;
}

pre li:nth-child(odd) {
	background-color: rgba(0, 0, 0, 0.2);
}

pre li span.attr {
	color: #79c0ff;
}
pre li span.code-inline {
	color: #ffa657;
}
pre li span.command {
	color: #d2a8ff;
}
pre li span.comment {
	color: #8b949e;
}
pre li span.deleted {
	color: #ff7b72;
}
pre li span.function {
	color: #d2a8ff;
}
pre li span.heading {
	color: #79c0ff;
}
pre li span.inserted {
	color: #7ee787;
}
pre li span.keyword {
	color: #ff7b72;
}
pre li span.link {
	color: #58a6ff;
}
pre li span.literal {
	color: #79c0ff;
}
pre li span.meta {
	color: #8b949e;
}
pre li span.number {
	color: #79c0ff;
}
pre li span.operator {
	color: #d2a8ff;
}
pre li span.property {
	color: #79c0ff;
}
pre li span.selector {
	color: #7ee787;
}
pre li span.string {
	color: #a5d6ff;
}
pre li span.tag {
	color: #7ee787;
}
pre li span.token {
	color: #c9d1d9;
}
pre li span.type {
	color: #ffa657;
}
pre li span.variable {
	color: #ffa657;
}
</style>
