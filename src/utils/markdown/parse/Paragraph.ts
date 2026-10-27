import { MarkdownASTType } from "../types.ts";
import { ATS, AutoMatchATS } from "./ATS.ts";
import { Text } from "./Text.ts";

const charCodeReturn = "\r".charCodeAt(0);
const charCodeEnter = "\n".charCodeAt(0);

export class Paragraph extends AutoMatchATS {
	readonly type = MarkdownASTType.Paragraph;
	static _isMatch(text: string, index: number) {
		return 0;
	}
	private _children: ATS[] = [];
	get children(): ATS[] {
		return this._children;
	}
	_isEnd(text: string, index: number): number {
		let code = text.charCodeAt(index);
		if (code === charCodeEnter) {
			let t = index++;
			do {
				if (++t === text.length) return t - index;
				code = text.charCodeAt(t);
				if (text.charCodeAt(t) === charCodeEnter) return t - index + 1;
			} while (code === charCodeReturn);
		}
		return -1;
	}
	_matchChild = [Text];
	protected _handleChild(child: ATS): void {
		this._children.push(child);
	}
}
