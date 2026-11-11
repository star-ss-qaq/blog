import { db } from "@/database";
import { Article } from "@/database/article";
import { Body, Post, Query, View } from "@thestarweb/star-framework-app-web";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";
import { Or } from "@thestarweb/star-framework-db";

export class ArticleManageRoute {
	@View("edit", new VueRender(() => import("@/view/admin/edit-article.vue")))
	async edit(@Query("id") id?: number) {
		if (id) {
			const [article, tags] = await Promise.all([
				db.select("article").addSelect("*").where("id", id).one(),
				db.select("articleToTag").addSelect("tagId").where("articleId", id),
			]);
			if (article) {
				return {
					article: Object.assign(article, { tags: tags.map((i) => i.tagId) }),
				};
			}
		}
		return { article: null };
	}
	// @View("list")
	// list() {
	// 	//
	// }
	@Post("save")
	async save(
		@Body()
		{
			id,
			tags = [],
			...data
		}: {
			id?: number;
			title: string;
			content: string;
			tags?: number[];
		},
	) {
		const uid = 0;
		if (id) {
			const existTags = (
				await db
					.select("articleToTag")
					.addSelect("tagId")
					.where("articleId", id)
			).map((i) => i.tagId);
			const tagToDel = existTags.filter((i) => !tags.includes(i));
			const tagToAdd = tags.filter((i) => !existTags.includes(i));
			await Promise.all([
				db
					.update("article")
					.set({
						...data,
					}).set({
						updateBy: uid,
						updateTime: new Date()
					})
					.where("id", id),
				tagToDel.length > 0
					? db
							.delete("articleToTag")
							.where("articleId", id)
							.where("tagId", Or(...tagToDel))
					: null,
				tagToAdd.length > 0
					? db
							.insert("articleToTag")
							.data(...tagToAdd.map((i) => ({ articleId: id, tagId: i })))
					: null,
			]);
		} else {
			const res = await db.insert("article").data({
				...data,
				keywords: "",
				time: new Date(),
				sender: uid,
				display: 1,
			});
			tags.length > 0 &&
				(await db
					.insert("articleToTag")
					.data(
						...tags.map((i) => ({ articleId: res.lastInsertRowid, tagId: i })),
					));
		}
	}
}
