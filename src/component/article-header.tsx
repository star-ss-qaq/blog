import React from "react";
import dayjs from "dayjs";
import type { Article, Tag } from "@/database/types";

interface ArticleHeaderProps {
	article: Article & { tags: Tag[] };
	isIndex: boolean;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article, isIndex }) => {
	return (
		<>
			<h2>{article.title}</h2>
			<div className="author">
				<img className="picture" alt="" />
				<div>{dayjs(article.time).format("YYYY-MM-DD HH:mm:ss")}</div>
				{article.updateTime && (
					<div>
						{dayjs(article.updateTime).format("YYYY-MM-DD HH:mm:ss")}已更新
					</div>
				)}
			</div>
			<div className="tags">
				{article.tags.map((item) => (
					<a key={item.id} href={`/tag/id/${item.id}`} className="tag">
						{item.name}
					</a>
				))}
			</div>
		</>
	);
};

export default ArticleHeader;
