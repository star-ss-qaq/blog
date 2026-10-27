import { MarkdownASTType } from "../types.ts";
import { ATS, AutoMatchATS } from "./ATS.ts";
import { Paragraph } from "./Paragraph.ts";

const blockTypes = [Paragraph] as const;
type BlockTypes = Paragraph;

export class Markdown extends AutoMatchATS {
	private _markdown = "";
	public get markdown() {
		return this._markdown;
	}
	constructor(markdown: string) {
		super();
		// @ts-ignore
		this.root = this;
		this.update(markdown, 0, 0, markdown.length);
	}
	public readonly type = MarkdownASTType.Markdown;
	// static _tryCreate(root: Markdown, text: string, index: number) {
	// 	return null;
	// }
	private _children: BlockTypes[] = [];
	get children() {
		return this._children;
	}
	_isEnd(text: string, index: number): number {
		return -1;
	}
	_handleChild(child: ATS): void {
		this._children.push(child as BlockTypes);
	}
	readonly _matchChild = blockTypes;
	protected update(
		newData: string,
		index: number,
		oldLength: number,
		newLength: number,
	) {
		this._markdown = newData;
		const children = this._children;
		this._children = [];
		let i = 0;
		while (
			i < children.length &&
			children[i].pos + children[i].length <= index
		) {
			this._children.push(children[i]);
			i++;
		}
		const startAts = children[i];
		const parsing: ATS[] = [this];
		let top: ATS = this;
		//
		let currentIndex = startAts ? startAts.pos : index;
		let currentEnd = newData.length - 1;
		const len = this._handleCode(newData, currentIndex, currentEnd);
		while (i++ < children.length) {}
		// while (i++ < children.length) this._children.push(children[i]);
	}
}
