import { Profile, ValidateProfileError } from "@/entity/Profile";

export interface ProfileSchema {
  readonly: boolean;
  data?: Profile;
  form?: Profile; 
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[]
}
