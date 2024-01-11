import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleViewWay } from "entity/Article";


export interface ArticlesSchema extends EntityState<Article> {
  error?: string;
  isLoading?: boolean;
  
  view: ArticleViewWay;
}