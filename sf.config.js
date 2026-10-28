// @ts-check
import { SFWebPlugin } from "@thestarweb/star-framework-app-web";
import { SFWebVuePlugin } from "@thestarweb/star-framework-app-web-vue";
import { defineConfig } from "@thestarweb/star-framework-cli";
import dayjs from "dayjs";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const packageInfo = JSON.parse(readFileSync("./package.json", "utf8"));
const version = packageInfo.version;

export default defineConfig({
	plugin: [
		SFWebPlugin({ htmlPath: join(process.cwd(), "index.html") }),
		SFWebVuePlugin(),
	],
	resolve: {
		tsconfigPaths: true,
	},
	define: {
		"process.env.VERSION": JSON.stringify(version),
		"process.env.BUILD_AT": JSON.stringify(
			dayjs().format("YYYY-MM-DD HH:mm:ss"),
		),
	},
});
