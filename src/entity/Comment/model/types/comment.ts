import { User } from "entity/User";


export interface IComment {
  id: string;
  content: string;
  articleId: string;
  user: User
}