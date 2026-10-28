import { Component } from "vue";
import paragraph from "./components/paragraph.vue";
import text from "./components/text.vue";
import code from "./components/code.vue";
import inlineCode from "./components/inline-code.vue";
import image from "./components/image.vue";
import list from "./components/list.vue";
import link from "./components/link.vue";

export const compMap: Record<string, Component> = {
	paragraph,
	text,
	code,
	inlineCode,
	image,
	list,
	link,
};
