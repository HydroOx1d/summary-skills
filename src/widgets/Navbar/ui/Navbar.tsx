import { getUserAuthData } from "entity/User";
import { LoginModal } from "features/authByUserName";
import { AvatarDropdown } from "features/avatarDropdown";
import { NotificationButton } from "features/notificationButton";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/className";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import cls from "./Navbar.module.scss";

const Navbar = React.memo(() => {
	const {t} = useTranslation();
	const [modalIsAuth, setModalIsAuth] = React.useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = React.useCallback(() => {
		setModalIsAuth(false);
	}, []);

	const onShowModal = React.useCallback(() => {
		setModalIsAuth(true);
	}, []);

	if (authData) {
		return (
			<nav className={classNames(cls.Navbar)}>
				<div className={cls.content}>
					<NotificationButton/>
					<AvatarDropdown/>
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