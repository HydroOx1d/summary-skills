
import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./ForbiddenPage.module.scss";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
	const {
		className
	} = props;

	return (
		<div className={classNames(cls.ForbiddenPage, {}, [className])}>ForbiddenPage</div>
	);
};

export default ForbiddenPage;
