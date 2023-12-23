import { Country } from "entity/Country";
import { Currency } from "entity/Currency";


export interface Profile {
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
}