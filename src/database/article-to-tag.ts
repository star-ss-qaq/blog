import type {
	GetTableDataType,
	TableSchema,
} from "@thestarweb/star-framework-db";

export const articleToTag = {
	columns: {
		articleId: { type: "int" },
		tagId: { type: "int" },
	},
	primaryKey: ["articleId", "tagId"],
	indexes: [{ type: "unique", columns: ["tagId", "articleId"] }],
} satisfies TableSchema;

export type ArticleToTag = GetTableDataType<typeof articleToTag>;
