import { db } from "@/database";
import type { Tag } from "@/database/types";
import { Param, View } from "@thestarweb/star-framework-app-web";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";

export class TagRoute {
	@View("list/:page", new VueRender(() => import("@/view/public/tag-list.vue")))
	async list(@Param("page") page: number) {
		return await db.select("tag").addSelect("*").page(page, 20);
	}

	@SFSideOnly("server")
	async _query(tag: Tag | undefined, page: number) {
		if (tag) {
			return {
				tag,
				...(await db
					.select("articleToTag")
					.join("article")
					.on("article.id", "articleToTag.articleId")
					.addSelect("article.id", "article.title", "article.time")
					.where("articleToTag.tagId", tag.id)
					.page(page, 20)),
			};
		}
	}

	@View(
		"id/:id/:page",
		new VueRender(() => import("@/view/public/tag-content.vue")),
	)
	async id(@Param("id") id: number, @Param("page") page: number = 1) {
		const tag = await db.select("tag").addSelect("*").where("id", id).one();
		return await this._query(tag, page);
	}

	@View(
		"name/:name/:page",
		new VueRender(() => import("@/view/public/tag-content.vue")),
	)
	async name(@Param("name") name: string, @Param("page") page: number = 1) {
		console.log(name);
		const tag = await db
			.select("tag")
			.addSelect("*")
			.where("eName", name)
			.one();
		return await this._query(tag, page);
	}
}
