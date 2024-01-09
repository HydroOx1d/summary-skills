import { User } from "entity/User";


export interface IComment {
  id?: number;
  content?: string;
  articleId?: string;
  user?: User
}