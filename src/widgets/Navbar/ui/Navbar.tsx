import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, getUserIsAdmin, userActions } from "entity/User";
import { LoginModal } from "features/authByUserName";
import Dropdown from "shared/ui/Dropdown/Dropdown";
import type { DropdownItem } from "shared/ui/Dropdown/Dropdown";
import Avatar from "shared/ui/Avatar/Avatar";
import { routePath } from "shared/config/routeConfig/routeConfig";

const Navbar = React.memo(() => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const [modalIsAuth, setModalIsAuth] = React.useState(false);
	const authData = useSelector(getUserAuthData);
	const isAdmin = useSelector(getUserIsAdmin);
	const isManager = useSelector(getUserIsAdmin);

	const onCloseModal = React.useCallback(() => {
		setModalIsAuth(false);
	}, []);

	const onShowModal = React.useCallback(() => {
		setModalIsAuth(true);
	}, []);

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

	if (authData) {
		return (
			<nav className={classNames(cls.Navbar)}>
				<div className={cls.content}>
					<Dropdown trigger={<Avatar size={40} src={authData.avatar} />} items={dropdownItems} direction="bottom right"/>
				</div>
			</nav>
		);
	}

	return (
		<nav className={classNames(cls.Navbar)}>
			<div className={cls.content}>
				<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
					{t("login")}
				</Button>
				{modalIsAuth && (
					<LoginModal isOpen={modalIsAuth} onClose={onCloseModal} />
				)}
			</div>
		</nav>
	);
});

Navbar.displayName = "Navbar";

export default Navbar;