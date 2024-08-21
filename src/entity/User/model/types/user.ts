import { FeatureFlags } from "@/shared/types";
import { UserRoles } from "../consts/consts";
import { AccountSettings } from "./accountSettings";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoles[];
  features: FeatureFlags;
  accountSettings?: AccountSettings
}

export interface UserSchema {
  authData?: User;
}