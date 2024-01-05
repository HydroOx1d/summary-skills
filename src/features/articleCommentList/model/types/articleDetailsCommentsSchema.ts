import { EntityState } from "@reduxjs/toolkit";
import { IComment } from "entity/Comment";

export interface ArticleDetailsCommentsSchema extends EntityState<IComment> {
  data?: IComment[];
  isLoading: boolean;
  error?: string;
}