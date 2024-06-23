export interface ArticleRating {
  id: number;
  rate: number;
  userId: string;
  articleId: string;
  feedback?: string;
}