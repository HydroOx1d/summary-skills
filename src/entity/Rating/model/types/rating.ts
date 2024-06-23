export interface ArticleRating {
  id: number;
  rate: number;
  userId: string;
  articleId: string;
  feedback?: string;
}

export interface ProfileRating {
  id: number;
  rate: number;
  userId: string;
  profileId: string;
  feedback?: string;
}