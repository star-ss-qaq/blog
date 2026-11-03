import { db } from "@/database";
import { decode } from "html-entities";

(async () => {
	const data = await db.select("article").addSelect("*");
	for (const item of data) {
		// const newTitle = decode(item.title);
		const newContent = decode(item.content)
			.replace(/(\n#+)([^ #])/g, "$1 $2")
			.replaceAll("{$img_url}", "//static.thestarweb.cn/img/");
		// if (item.id === 35) console.log(newContent);
		await db
			.update("article")
			.set({ content: newContent })
			.where("id", item.id);
	}
})();
