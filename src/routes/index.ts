import {
	Get,
	Layout,
	LocationTo,
	Param,
	SubRoute,
	View,
} from "@thestarweb/star-framework-app-web";
import { Inject } from "@thestarweb/star-framework-di";
import { VueRender } from "@thestarweb/star-framework-app-web-vue";
import { PublicRoute } from "./public/index.js";
import { AdminRoute } from "./admin/index.js";

export class Route {
	@Inject()
	@SubRoute("")
	public!: PublicRoute;

	@Inject()
	@SubRoute('admin')
	admin!: AdminRoute;

	@Get("/essay/list/:page")
	oldEssayList(@Param("page") page: number) {
		return new LocationTo(`/list/${page}`);
	}
	@Get("/essay/id/:id")
	oldEssay(@Param("id") id: number) {
		return new LocationTo(`/p/${id}`);
	}
	@Get("/type/list/:page")
	oldTypeList(@Param("page") page: number) {
		return new LocationTo(`/tag/list/${page}`);
	}

	@Get("/type/id/:id/:page")
	oldTypeEssay(@Param("id") id: number, @Param("page") page: number) {
		return new LocationTo(`/tag/id/${id}/${page}`);
	}
	@Get("/type/id/:id")
	oldTypeEssay2(@Param("id") id: number) {
		return new LocationTo(`/tag/id/${id}/1`);
	}
}
