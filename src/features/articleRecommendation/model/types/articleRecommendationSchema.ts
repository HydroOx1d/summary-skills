import { EntityState } from "@reduxjs/toolkit";
import { Article } from "entity/Article";

export interface ArticleRecommendationSchema extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
}