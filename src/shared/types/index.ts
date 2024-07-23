import { UserRoles } from "@/entity/User";
import { RouteProps } from "react-router-dom";

export type SortOrder = "asc" | "desc"
export type DropdownDirection = "top left" | "top right" | "bottom left" | "bottom right"

export type AppRouteProps = RouteProps & {
	onlyAuth?: boolean;
	roles?: UserRoles[];
}