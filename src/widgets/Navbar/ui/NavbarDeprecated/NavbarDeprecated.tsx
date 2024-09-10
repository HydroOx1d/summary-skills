import { User } from "@/entity/User";
import React from "react";
import cls from "./NavbarDeprecated.module.scss";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import { classNames } from "@/shared/lib/classNames/className";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import Button, { ButtonTheme } from "@/shared/ui/deprecated/Button/Button";
import { LoginModal } from "@/features/authByUserName";
import { useTranslation } from "react-i18next";

interface NavbarDeprecatedProps {
  className?: string
  authData?: User;
  onShowModal: () => void
  onCloseModal: () => void
  modalIsAuth: boolean
}

const NavbarDeprecated = (props: NavbarDeprecatedProps) => {
	const {
		authData,
		modalIsAuth,
		onCloseModal,
		onShowModal,
		className
	} = props;

	const {t} = useTranslation();

	if (authData) {
		return (
			<nav className={classNames(cls.NavbarDeprecated, {}, [className])}>
				<HStack gap="16" max justify="flex-end">
					<NotificationButton/>
					<AvatarDropdown/>
				</HStack>
			</nav>
		);
	}

	return (
		<nav className={classNames(cls.NavbarDeprecated, {}, [className])}>
			<HStack gap="16" max justify="flex-end">
				<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
					{t("login")}
				</Button>
				{modalIsAuth && (
					<LoginModal isOpen={modalIsAuth} onClose={onCloseModal} />
				)}
			</HStack>
		</nav>
	);
};

export default React.memo(NavbarDeprecated);