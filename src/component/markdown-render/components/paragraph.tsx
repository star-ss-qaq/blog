import React from "react";
import RenderList from "../render-list";
import { Paragraph } from "mdast";

interface ParagraphProps {
	item: Paragraph;
}

const ParagraphComponent: React.FC<ParagraphProps> = ({ item }) => {
	return (
		<p style={{ margin: "1em 0" }}>
			<RenderList items={item.children} />
		</p>
	);
};

export default ParagraphComponent;
