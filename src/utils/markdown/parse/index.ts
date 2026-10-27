import { MarkdownAST, MarkdownASTType } from "../types.ts";
import { Markdown } from "./MarkDown.ts";

const charCodeReturn = "\r".charCodeAt(0);
const charCodeEnter = "\n".charCodeAt(0);

interface TempStatus {
	ast: MarkdownAST;
	startAt: number;
	isEnd: () => number;
	handleChild: (child: MarkdownAST | string) => void;
}

export function parseMarkdown(markdown: string) {
	return new Markdown(markdown);
}
