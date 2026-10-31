import {
	Get,
	Layout,
	Param,
	SubRoute,
	View,
} from "@thestarweb/star-framework-app-web";
import { Inject } from "@thestarweb/star-framework-di";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";
import { db } from "@/database/index.ts";
import { Or } from "@thestarweb/star-framework-db";

export class ArticleRoute {
	@View("", new VueRender(() => import("@/view/public/index.vue")))
	async index() {
		const data = await db
			.select("article")
			.addSelect("*")
			.where("display", 1)
			.orderBy("id", "DESC")
			.limit(5);
		const tags = await db
			.select("tag")
			.addSelect("*")
			.join("articleToTag")
			.addSelect("articleToTag.articleId")
			.on("tag.id", "articleToTag.tagId")
			.where("articleToTag.articleId", Or(...data.map((i) => i.id)));
		return {
			list: data.map((i) => ({
				...i,
				tags: tags.filter((tag) => tag.articleId === i.id),
			})),
		};
	}

	@View("list/:page", new VueRender(() => import("@/view/public/list.vue")))
	async list(@Param("page") page: number) {
		return {
			...(await db
				.select("article")
				.addSelect("id", "title", "time", "sender")
				.orderBy("id", "DESC")
				.page(page, 20)),
			current: page,
		};
	}

	@View(
		"p/:id",
		new VueRender(() => import("@/view/public/p.vue")),
		(data) => ({
			title: data.data.title,
		}),
	)
	async p(@Param("id") id: number) {
		const data = await db
			.select("article")
			.addSelect("*")
			.where("id", id)
			.one();
		if (!data) {
			throw new Error("error");
		}
		const tags = await db
			.select("tag")
			.addSelect("*")
			.join("articleToTag")
			.on("tag.id", "articleToTag.tagId")
			.where("articleToTag.articleId", id);
		return { data: { ...data, tags } };
	}

	@View("*", new VueRender(() => import("@/view/public/404.vue")))
	notFind: undefined;
}
