import { Layout, SubRoute, View } from "@thestarweb/star-framework-app-web";
import { Inject } from "@thestarweb/star-framework-di";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";
import { ArticleRoute } from "./article";
import { TagRoute } from "./tag";

@Layout(new VueRender(() => import("@/view/public/layout.vue")), (o) => ({
	...o,
	title: o.title ? `${o.title} - xing` : "xing",
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

	@View("*", new VueRender(() => import("@/view/public/404.vue")))
	notFind: undefined;
}
