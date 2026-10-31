import { useMemo } from "react";
import RenderList from "./render-list";
import { fromMarkdown } from "mdast-util-from-markdown";
import React from "react";

export default function ({ markdown }: { markdown: string }) {
	const blocks = useMemo(
		() => fromMarkdown(markdown, undefined, { extensions: [] }),
		[markdown],
	);
	return <RenderList items={blocks.children} />;
}
