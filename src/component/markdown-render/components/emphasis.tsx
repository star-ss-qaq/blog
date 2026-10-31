import React from "react";
import RenderList from "../render-list";
import { Emphasis } from "mdast";

interface EmphasisProps {
	item: Emphasis;
}

const EmphasisComponent: React.FC<EmphasisProps> = ({ item }) => {
	return (
		<span style={{ fontStyle: "italic" }}>
			<RenderList items={item.children} />
		</span>
	);
};

export default EmphasisComponent;
