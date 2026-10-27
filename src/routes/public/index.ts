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

@Layout(new VueRender(() => import("@/view/layout.vue")), (o) => ({
	...o,
	title: o.title ? `${o.title} - xing` : "xing",
	htmlMeta: {
		...o.htmlMeta,
		viewport: "width=device-width, initial-scale=1.0",
	},
}))
export class PublicRoute {
	@View("", new VueRender(() => import("@/view/index.vue")))
	async index() {
		return {
			list: await db
				.select("article")
				.addSelect("*")
				.orderBy("id", "DESC")
				.limit(5),
		};
	}

	@View("list/:page", new VueRender(() => import("@/view/list.vue")))
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

	@View("p/:id", new VueRender(() => import("@/view/p.vue")), (data) => ({
		title: data.data.title,
	}))
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
		console.log(tags);
		return { data, tags };
	}

	@View("*", new VueRender(() => import("@/view/404.vue")))
	notFind: undefined;
}
