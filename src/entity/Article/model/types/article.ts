import { User } from "entity/User";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED_AT = "createdAt",
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  firstImage: string;
  views: number;
  createdAt: string;
  type: string[];
  content: string;
  user: User;
  preview: string;
}

export interface ArticleDetailsSchema {
  data?: Article;
  error?: string;
  isLoading: boolean;
}

export enum ArticleType {
  ALL = "all",
  IT = "IT",
  ECONOMICS = "economics"
}

export enum ArticleViewWay {
  CARDS = "cards",
  LIST = "list"
}