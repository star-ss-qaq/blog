import type {
	GetTableDataType,
	TableSchema,
} from "@thestarweb/star-framework-db";

export const tag = {
	columns: {
		id: { type: "int", autoIncrement: true },
		/**
		 * 辅助名称也可用于数据查找
		 */
		eName: { type: "string", length: 100, nullable: true },
		name: { type: "string", length: 100 },
		info: { type: "string", length: 1000, defaultValue: "" },
		pid: { type: "int" },
	},
	primaryKey: ["id"],
	indexes: [{ type: "unique", columns: "eName" }],
} satisfies TableSchema;

export type Tag = GetTableDataType<typeof tag>;
