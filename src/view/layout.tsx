import { SFRoute } from "@thestarweb/star-framework-app-web-react";
import React from "react";

const Layout: React.FC = () => {
	// In a real application, these would likely come from context or props
	const menu = [
		{ path: "/", title: "首页" },
		{ path: "https://www.thestarweb.cn", title: "主站" },
		{ path: "/list/1", title: "文章列表" },
		{ path: "/type/list/1", title: "分类列表" },
	];
	const version = process.env.VERSION || "unknown";
	const buildAt = process.env.BUILD_AT || new Date().toISOString();

	return (
		<div className="app-main">
			<header>
				{menu.map((item) => (
					<a key={item.path} href={item.path}>
						{item.title}
					</a>
				))}
			</header>
			<div className="app-body">
				{/* Assuming sf-route is replaced by React Router or similar */}
				<SFRoute />
			</div>
			<footer>
				<p>
					{version} build at {buildAt}
				</p>
				<p>
					星星站点博客&copy;2013-{new Date().getFullYear()} 星星站点
					保留所有权利
				</p>
			</footer>
		</div>
	);
};

export default Layout;
