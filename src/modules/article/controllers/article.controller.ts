import { Request, Response } from "express";
import { ArticleService } from "../services/article.service";

export class ArticleController {
  public async getAll(req: Request, res: Response): Promise<any> {
    const data = await ArticleService.getAllArticle();
    res.status(200).json({
      message: "Success"
    });
  }
}
