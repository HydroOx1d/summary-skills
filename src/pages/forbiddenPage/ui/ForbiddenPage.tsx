
import React from "react";
import { classNames } from "@/shared/lib/classNames/className";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
	const {
		className
	} = props;

	return (
		<div className={classNames("", {}, [className])}>ForbiddenPage</div>
	);
};

export default ForbiddenPage;
