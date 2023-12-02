import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entity/User";
import { LoginModal } from "features/authByUserName";

const Navbar = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const [modalIsAuth, setModalIsAuth] = React.useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = React.useCallback(() => {
		setModalIsAuth(false);
	}, []);

	const onShowModal = React.useCallback(() => {
		setModalIsAuth(true);
	}, []);

	const onLogout = React.useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	if (authData) {
		return (
			<nav className={classNames(cls.Navbar)}>
				<div className={cls.content}>
					<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
						{t("logout")}
					</Button>
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
				<LoginModal isOpen={modalIsAuth} onClose={onCloseModal}/>
			</div>
		</nav>
	);
};

export default Navbar;