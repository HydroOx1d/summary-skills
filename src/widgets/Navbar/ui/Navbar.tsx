import React from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={classNames(cls.Navbar)}>
			<div className={cls.links}>
				/
			</div>
		</nav>
	);
};

export default Navbar;