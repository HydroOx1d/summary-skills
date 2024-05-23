import { User } from "entity/User";

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