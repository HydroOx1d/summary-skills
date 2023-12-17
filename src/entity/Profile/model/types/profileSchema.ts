import { Country, Currency } from "shared/constants/common";

export interface Profile {
  name: string;
  surname: string;
  age: 25;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
}