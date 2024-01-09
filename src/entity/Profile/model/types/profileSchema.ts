import { Country } from "entity/Country";
import { Currency } from "entity/Currency";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_USER_AGE = "INCORRECT_USER_AGE",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR"
}

export interface Profile {
  id?: string;
  name?: string;
  surname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  readonly: boolean;
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[]
}