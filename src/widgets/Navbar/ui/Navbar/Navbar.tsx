import { getUserAuthData } from "@/entity/User";
import { ToggleFeature } from "@/shared/lib/features/ToggleFeature/ToggleFeature";
import React from "react";
import { useSelector } from "react-redux";
import NavbarDeprecated from "../NavbarDeprecated/NavbarDeprecated";
import cls from "./Navbar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import HStack from "@/shared/ui/Stack/HStack/HStack";
import Button from "@/shared/ui/Button/Button";
import { LoginModal } from "@/features/authByUserName";

const Navbar = React.memo(() => {
	const [modalIsAuth, setModalIsAuth] = React.useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = React.useCallback(() => {
		setModalIsAuth(false);
	}, []);

	const onShowModal = React.useCallback(() => {
		setModalIsAuth(true);
	}, []);

	return (
		<ToggleFeature
			name="isAppRedesigned"
			on={
				authData ? (<nav className={cls.Navbar}>
					<HStack gap="16" max justify="flex-end" align="center">
						<ThemeSwitcher />
						<NotificationButton />
						<AvatarDropdown />
					</HStack>
				</nav>) : (
					<nav className={cls.Navbar}>
						<HStack gap="16" max justify="flex-end" align="center">
							<Button
								onClick={onShowModal}
								variant="clear"
							>
								Login
							</Button>
							{modalIsAuth && (
								<LoginModal
									isOpen={modalIsAuth}
									onClose={onCloseModal}
								/>
							)}
						</HStack>
					</nav>
				)
			}
			off={
				<NavbarDeprecated
					authData={authData}
					modalIsAuth={modalIsAuth}
					onCloseModal={onCloseModal}
					onShowModal={onShowModal}
				/>
			}
		/>
	);
});

Navbar.displayName = "Navbar";

export default Navbar;