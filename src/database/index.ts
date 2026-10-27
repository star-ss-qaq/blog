import { join } from "node:path";
import { SFDB } from "@thestarweb/star-framework-db";
import { article } from "./article.ts";
import { tag } from "./tag.ts";
import { articleToTag } from "./article-to-tag.ts";

export const db = SFSideSwitch({
	server: new SFDB(
		{
			database: {
				default: {
					tables: {
						article,
						tag,
						articleToTag,
					},
				},
			},
			defaultDatabase: "default" as const,
		},
		{ type: "sqlite", file: join(process.cwd(), "./db.sqlite") },
	),
})!;
if (process.env.NODE_ENV === "development") {
	SFSideSwitch({
		server: db.structHelper.update().then(() => {
			console.log("数据库结构已经更新");
		}),
	});
}
