import { ArticleController } from "../controllers/article.controller";

export class ArticleRoute {
  private article: ArticleController = new ArticleController();

  public routes(app: any): void {
    app.get("/article", this.article.getAll);
  }
}
