import { db } from "@/database";
import { Tag } from "@/database/tag";
import { Body, Param, Post, View } from "@thestarweb/star-framework-app-web";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";

export class TagManageRoute {
	@View("list/:page", new VueRender(() => import("@/view/admin/list-tag.vue")))
	async list(@Param("page") page: number) {
		return await db.select("tag").addSelect("*").page(page, 20);
	}
	@Post("save")
	async saveTag(
		@Body()
		tag: {
			id?: number;
			name: string;
			eName?: string;
			pid?: number;
			info?: string;
		},
	) {
		const newData: Omit<Tag, "id"> = {
			name: tag.name,
			eName: tag.eName || null,
			pid: tag.pid || 0,
			info: tag.info || "",
		};
		if (tag.id) {
			await db.update("tag").set(newData).where("id", tag.id);
		} else {
			await db.insert("tag").data(newData);
		}
	}
}
