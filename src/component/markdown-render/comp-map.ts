import paragraph from "./components/paragraph";
import text from "./components/text";
import code from "./components/code";
import inlineCode from "./components/inline-code";
import image from "./components/image";
import list from "./components/list";
import link from "./components/link";
import strong from "./components/strong";
import thematicBreak from "./components/thematic-break";
import emphasis from "./components/emphasis";
import { FC } from "react";

export const compMap: Record<string, FC<{ item: any }>> = {
	paragraph,
	text,
	code,
	inlineCode,
	image,
	list,
	link,
	strong,
	thematicBreak,
	emphasis,
};
