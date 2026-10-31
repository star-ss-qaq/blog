import React from "react";
import RenderList from "../render-list";
import { Strong } from "mdast";

interface StrongProps {
	item: Strong;
}

const StrongComponent: React.FC<StrongProps> = ({ item }) => {
	return (
		<span style={{ fontWeight: 800 }}>
			<RenderList items={item.children} />
		</span>
	);
};

export default StrongComponent;
