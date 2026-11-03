import { Layout, SubRoute, View } from "@thestarweb/star-framework-app-web";
import { Inject } from "@thestarweb/star-framework-di";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";
import { ArticleRoute } from "./article";
import { TagRoute } from "./tag";

@Layout(new VueRender(() => import("@/view/public/layout.vue")), (o) => ({
	...o,
	title: o.title ? `${o.title} - 星星站点博客` : "星星站点博客",
	htmlMeta: {
		...o.htmlMeta,
		viewport: "width=device-width, initial-scale=1.0",
	},
}))
export class PublicRoute {
	@Inject()
	@SubRoute("")
	articleRoute!: ArticleRoute; // = new ArticleRoute();

	@Inject()
	@SubRoute("tag")
	tagRoute!: TagRoute;

	@View("about", new VueRender(() => import("@/view/public/about.vue")))
	about: undefined;

	@View("*", new VueRender(() => import("@/view/public/404.vue")))
	notFind: undefined;
}
