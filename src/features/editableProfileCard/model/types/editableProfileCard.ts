import { Profile } from "entity/Profile";
import { ValidateProfileError } from "../consts/consts";

export interface ProfileSchema {
  readonly: boolean;
  data?: Profile;
  form?: Profile; 
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[]
}
