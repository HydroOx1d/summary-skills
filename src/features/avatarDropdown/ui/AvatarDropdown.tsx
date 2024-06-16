import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import Dropdown, { DropdownItem } from "@/shared/ui/Dropdown/Dropdown";
import { getUserAuthData, getUserIsAdmin, userActions } from "@/entity/User";
import { routePath } from "@/shared/config/routeConfig/routeConfig";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@/shared/ui/Avatar/Avatar";

interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown = (props: AvatarDropdownProps) => {
	const {
		className
	} = props;
	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);
	const isAdmin = useSelector(getUserIsAdmin);
	const isManager = useSelector(getUserIsAdmin);

	const onLogout = React.useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const isAdminPageAvailable = React.useMemo(() => isAdmin || isManager, [isAdmin, isManager]);

	const dropdownItems = React.useMemo<DropdownItem[]>(() => {
		return [
			...(isAdminPageAvailable ? [{
				content: "Admin",
				href: routePath.admin
			}] : []),
			{
				content: "Profile",
				href: routePath.profile + authData?.id,
			},
			{
				content: "Logout",
				onClick: onLogout
			},
		];
	}, [authData?.id, isAdminPageAvailable, onLogout]);

	if (!authData) {
		return null;
	}

	return (
		<Dropdown className={classNames("", {}, [className])} trigger={<Avatar size={40} src={authData.avatar} />} items={dropdownItems} direction="bottom right"/>
	);
};

export default AvatarDropdown;
