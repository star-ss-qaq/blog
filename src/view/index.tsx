import React from "react";
import ArticleHeader from "@/component/article-header";
import Block from "@/component/block";
import type { Article, Tag } from "@/database/types";
import dayjs from "dayjs";

interface IndexProps {
	list: (Article & { tags: Tag[] })[];
}

const Index: React.FC<IndexProps> = ({ list }) => {
	return (
		<div className="index-list">
			{list.map((item) => (
				<a key={item.id} href={`/p/${item.id}`}>
					<ArticleHeader article={item} isIndex />
				</a>
			))}
		</div>
	);
};

export default Index;
