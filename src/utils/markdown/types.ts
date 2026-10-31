export enum MarkdownASTType {
	Text = 0,
	Markdown = 1,
	Paragraph = 2,
}

export interface MarkdownAST {
	type: MarkdownASTType;
	start: number;
	length: number;
	readonly child?: MarkdownASTType[];
}

export interface MarkdownParagraph extends MarkdownAST {
	type: MarkdownASTType.Paragraph;
	child: MarkdownASTType[];
}
