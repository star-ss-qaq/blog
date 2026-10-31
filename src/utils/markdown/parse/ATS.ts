import { MarkdownASTType } from "../types.ts";
import { Markdown } from "./MarkDown.ts";
import type { Text } from "./Text.ts";

interface ErrorInfo {
	message: string;
	pos: number;
}

let _Text: typeof Text;
export function _setText(_text: typeof Text) {
	_Text = _text;
}

export abstract class ATS {
	public abstract readonly root: Markdown;
	static _tryCreate(root: Markdown, text: string, index: number): ATS | null {
		return null;
	}
	errorInfo: ErrorInfo[] = [];
	abstract pos: number;
	length = 0;
	public abstract readonly type: MarkdownASTType;
	protected _update?(
		newData: string,
		index: number,
		oldLength: number,
		newLength: number,
	): number;
	protected _updateIndexOffset(offset: number) {
		this.pos += offset;
		this.errorInfo.forEach((e) => (e.pos += offset));
		this.children.forEach((c) => c._updateIndexOffset(offset));
	}
	get children(): readonly ATS[] {
		return [];
	}
}
export abstract class AutoMatchATS extends ATS {
	static _tryCreate(
		root: Markdown,
		text: string,
		index: number,
		limitEnd?: number,
	): ATS | null {
		const len = this._isMatch(text, index);
		if (len != -1) {
			const ins: AutoMatchATS = new (this as any)();
			ins.pos = index;
			//@ts-ignore
			ins.root = root;
			ins._handleCode(text, index + len, limitEnd);
			return ins;
		}
		return null;
	}
	pos = 0;
	public readonly root!: Markdown;
	static _isMatch(text: string, index: number): number {
		return -1;
	}
	abstract _isEnd(text: string, index: number): number;
	protected _handleCode(text: string, index: number, limitEnd?: number) {
		let currentIndex = index;
		const currentEnd = limitEnd ?? text.length - 1;
		let code: number;
		let textStart = -1;
		const handleText = (d = 0) => {
			if (textStart !== -1) {
				if (textStart < currentIndex - d) {
					if (this._handleText) {
						this._handleText?.(text.substring(textStart, currentIndex - d));
					} else if (this._matchChild.includes(_Text)) {
						//if (this._matchChild.includes(Text))
						this._handleChild(
							new _Text(this.root, textStart, currentIndex - d - textStart),
						);
					}
				}
				textStart = -1;
			}
		};
		while (currentIndex <= currentEnd) {
			let child: ATS | null;
			if (
				this._matchChild.find((i) => {
					child = i._tryCreate(this.root, text, currentIndex);
					if (child) {
						return true;
					}
					return false;
				})
			) {
				handleText();
				currentIndex += child!.length;
				this._handleChild(child!);
				continue;
			}
			const len = this._isEnd(text, currentIndex);
			if (len !== -1) {
				handleText();
				currentIndex += len + 1;
				break;
			}
			if (textStart === -1) {
				textStart = index;
			}
			currentIndex++;
		}
		handleText();
		this.length = currentIndex - this.pos;
		return currentIndex - index;
	}
	protected _handleChild(child: ATS) {}
	protected _handleText?(text: string): void;
	abstract readonly _matchChild: readonly {
		_tryCreate(root: Markdown, text: string, index: number): ATS | null;
	}[];
}
