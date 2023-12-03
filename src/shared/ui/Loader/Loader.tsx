import React from "react";
import "./Loader.scss";
import { classNames } from "shared/lib/classNames/className";

interface LoaderProps {
  className?: string
}

const Loader = (props: LoaderProps) => {
	const {
		className
	} = props;
  
	return (
		<div className={classNames("loader", {}, [className])}></div>
	);
};

export default Loader;