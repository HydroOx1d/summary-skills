import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import Modal from "shared/ui/Modal/Modal";

const Navbar = () => {
	const {t} = useTranslation();
	const [modalIsAuth, setModalIsAuth] = React.useState(false);

	const onToggleModal = React.useCallback(() => {
		setModalIsAuth(prev => !prev);
	}, []);

	return (
		<nav className={classNames(cls.Navbar)}>
			<div className={cls.content}>
				<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
					{t("login")}
				</Button>
				<Modal isOpen={modalIsAuth} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, hic
          laudantium eos exercitationem consequuntur recusandae temporibus enim
          nostrum quia eligendi impedit ullam maxime omnis commodi, cumque
          perspiciatis tenetur vel atque ut, et id. Ex quam enim asperiores
          aspernatur ut reiciendis aperiam veritatis. Rerum dolorem voluptate
          porro culpa odio omnis ut.
				</Modal>
			</div>
		</nav>
	);
};

export default Navbar;