import {
	Get,
	Layout,
	Param,
	SubRoute,
	View,
} from "@thestarweb/star-framework-app-web";
import { Inject } from "@thestarweb/star-framework-di";
import { ReactRender } from "@thestarweb/star-framework-app-web-react";
import { db } from "@/database/index.ts";
import { Or } from "@thestarweb/star-framework-db";

@Layout(new ReactRender(() => import("@/view/layout.tsx")), (o) => ({
	...o,
	title: o.title ? `${o.title} - xing` : "xing",
	htmlMeta: {
		...o.htmlMeta,
		viewport: "width=device-width, initial-scale=1.0",
	},
}))
export class PublicRoute {
	@View("", new ReactRender(() => import("@/view/index.tsx")))
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

	@View("list/:page", new ReactRender(() => import("@/view/list.tsx")))
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

	@View("p/:id", new ReactRender(() => import("@/view/p.tsx")), (data) => ({
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
		return { data: { ...data, tags } };
	}

	@View("*", new ReactRender(() => import("@/view/404.tsx")))
	notFind: undefined;
}
