import type { EntityState } from "@reduxjs/toolkit";
import type { IComment } from "@/entity/Comment";

export interface ArticleDetailsCommentsSchema extends EntityState<IComment> {
  data?: IComment[];
  isLoading: boolean;
  error?: string;
}