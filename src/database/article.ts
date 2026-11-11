import type {
	GetTableDataType,
	TableSchema,
} from "@thestarweb/star-framework-db";

export const article = {
	columns: {
		id: {
			type: "int",
			autoIncrement: true,
		},
		title: { type: "string", length: 200 },
		content: { type: "string" },
		keywords: { type: "string", length: 200 },
		time: { type: "int-datetime" },
		sender: { type: "int" },
		updateTime: { type: "int-datetime", defaultValue: 0 },
		updateBy: { type: "int", defaultValue: 0 },
		display: { type: "int" },
		hot: { type: "int", defaultValue: 0 },
	},
} satisfies TableSchema;
export type Article = GetTableDataType<typeof article>;
