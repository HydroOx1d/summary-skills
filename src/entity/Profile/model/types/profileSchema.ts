import { Country } from "entity/Country";
import { Currency } from "entity/Currency";

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