import { MarkdownAST } from "./types.ts";

export class Markdown {
	markdown = "";
	readIndex = 0;
	checkedAst: MarkdownAST[] = [];
	currentBlock?: MarkdownAST;
	append(data: string) {
		this.markdown += data;
		this._read(data);
	}
	private _read(data: string) {
		const parsed: MarkdownAST[] = [];
		let current: MarkdownAST | null = null;
		let index = 0;
		while (index < markdown.length) {
			if (!current) {
				while (markdown.charCodeAt(index)) index++;
			}
		}
		return { parsed };
	}
}
