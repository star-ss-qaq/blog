import { MarkdownASTType } from "../types.ts";
import { ATS, _setText } from "./ATS.ts";
import { Markdown } from "./MarkDown.ts";

export class Text extends ATS {
	readonly type = MarkdownASTType.Text;
	constructor(
		public readonly root: Markdown,
		public pos: number,
		public length: number,
	) {
		super();
	}
	get text() {
		return this.root.markdown.substring(this.pos, this.pos + this.length);
	}
}
_setText(Text);
