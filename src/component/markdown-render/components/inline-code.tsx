import React from "react";
import { InlineCode } from "mdast";

interface InlineCodeProps {
	item: InlineCode;
}

const InlineCodeComponent: React.FC<InlineCodeProps> = ({ item }) => {
	return (
		<span style={{ margin: "2px", fontStyle: "oblique" }}>{item.value}</span>
	);
};

export default InlineCodeComponent;
