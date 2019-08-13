import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { ArticleRoute } from "../src/modules/article/routes/article.route";

class App {
  public app: express.Application = express();
  private readonly mongoUrl: string = "mongodb://localhost:27017/nodets_jest";
  private readonly PORT: string | number = process.env.PORT || 3000;

  public article: ArticleRoute = new ArticleRoute();

  public constructor() {
    this.init();
    this.setRoutePath();
    this.listen();
  }

  private init(): void {
    this.setCors();
    this.setBodyParser();
    this.setUpMongoDb();
  }

  private setCors(): void {
    this.app.use(cors);
  }

  private setBodyParser(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private setUpMongoDb(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    mongoose.connection.once(
      "open",
      (): void => {
        console.log("Database is connected");
      }
    );
  }

  private setRoutePath(): void {
    this.setArticleRoute();
  }

  private setArticleRoute(): void {
    this.article.routes(this.app);
  }

  private listen(): void {
    this.app.listen(
      this.PORT,
      (): void => {
        console.log("Server is running at port", this.PORT);
      }
    );
  }
}

export default new App().app;
