export interface Article {
  id: string;
  title: string;
  subtitle: string;
  firstImage: string;
  views: number;
  createdAt: string;
  type: string[];
  content: string;
}

export interface ArticleDetailsSchema {
  data?: Article;
  error?: string;
  isLoading: boolean;
}
