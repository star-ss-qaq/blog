import React from "react";
import RenderList from "../render-list";
import { List } from "mdast";

interface ListProps {
	item: List;
}

const ListComponent: React.FC<ListProps> = ({ item }) => {
	// Determine if it's an ordered list (ol) or unordered list (ul)
	const Tag = item.ordered ? "ol" : "ul";

	return (
		<Tag
			style={{
				marginLeft: "2em",
				backgroundColor: "rgba(0, 0, 0, 0.2)",
				borderLeft: "2px inset #0f0",
				paddingLeft: "20px",
			}}
		>
			{item.children.map((child) => (
				<li key={child.type}>
					<RenderList items={child.children} />
				</li>
			))}
		</Tag>
	);
};

export default ListComponent;
