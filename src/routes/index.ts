import { Layout, SubRoute, View } from "@thestarweb/star-framework-app-web";
import { Inject } from "@thestarweb/star-framework-di";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";
import { PublicRoute } from "./public/index.js";

export class Route {
	@Inject()
	@SubRoute("")
	public!: PublicRoute;
}
