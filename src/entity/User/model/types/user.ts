import { FeatureFlags } from "@/shared/types";
import { UserRoles } from "../consts/consts";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoles[];
  features: FeatureFlags;
}

export interface UserSchema {
  authData?: User;
}