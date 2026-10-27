import { Component } from "vue";
import paragraph from "./paragraph.vue";
import text from "./text.vue";
import code from "./code.vue";
import inlineCode from "./inline-code.vue";
import image from "./image.vue";

export const compMap: Record<string, Component> = {
	paragraph,
	text,
	code,
	inlineCode,
	image,
};
