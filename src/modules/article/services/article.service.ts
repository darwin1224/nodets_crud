import { ArticleSchema } from "../models/article.model";
import * as mongoose from "mongoose";

export class ArticleService {
  private static article = mongoose.model("ArticleSchema", ArticleSchema);

  public static getAllArticle(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.article.find(
        (err: any, article: object[]): void => {
          if (err) reject(err);
          resolve(article);
        }
      );
    });
  }
}
