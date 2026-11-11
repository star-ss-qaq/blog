import { SubRoute } from "@thestarweb/star-framework-app-web";
import { ArticleManageRoute } from "./article";
import { Inject } from "@thestarweb/star-framework-di";
import { TagManageRoute } from "./tag";

export class AdminRoute{
  @Inject()
  @SubRoute('article')
  article!: ArticleManageRoute;
  @Inject()
  @SubRoute('tag')
  tag!:TagManageRoute;
}