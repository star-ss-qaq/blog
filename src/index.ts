import "./index.css";
import "@thestarweb/ui/style.css";
import { SubRoute } from "@thestarweb/star-framework-app-web";
import { Inject } from "@thestarweb/star-framework-di";
import { Route } from "./routes/index.js";
import "./database/index.js";
// import "../scripts/handle-old-data.js";
export default class App {
	@Inject()
	@SubRoute("/")
	route!: Route;
}
