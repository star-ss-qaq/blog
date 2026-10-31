import React from "react";
import Block from "@/component/block";
import type { Article } from "@/database/types";
import dayjs from "dayjs";

interface ListProps {
	data: Article[];
	total: number;
}

const List: React.FC<ListProps> = ({ data, total }) => {
	return (
		<Block>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						<a className="p" href={`/p/${item.id}`}>
							<span>{item.title}</span>
							<span>{dayjs(item.time).format("YYYY-MM-DD HH:mm:ss")}</span>
						</a>
					</li>
				))}
			</ul>
		</Block>
	);
};

export default List;
