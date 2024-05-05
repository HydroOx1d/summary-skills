import { Profile } from "entity/Profile";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_USER_AGE = "INCORRECT_USER_AGE",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR"
}
export interface ProfileSchema {
  readonly: boolean;
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[]
}
