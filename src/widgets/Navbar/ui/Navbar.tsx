import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import LoginModal from "features/authByUserName/ui/LoginModal/LoginModal";

const Navbar = () => {
	const {t} = useTranslation();
	const [modalIsAuth, setModalIsAuth] = React.useState(false);

	const onCloseModal = React.useCallback(() => {
		setModalIsAuth(false);
	}, []);

	const onShowModal = React.useCallback(() => {
		setModalIsAuth(true);
	}, []);

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