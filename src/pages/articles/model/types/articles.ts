import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleSortField, ArticleType, ArticleViewWay } from "entity/Article";
import { SortOrder } from "shared/types";

export interface ArticlesSchema extends EntityState<Article> {
  error?: string;
  isLoading?: boolean;
  
  view: ArticleViewWay;

  _inited: boolean;

  // paginate

  page: number;
  limit: number;
  hasMore: boolean;

  // filter

  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
}