/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const firstCharToUpperCase = require("../firstCharToUpperCase");

module.exports = (sliceName) => {
	return `
import React from "react";
import { classNames } from "@/shared/lib/classNames/className";
import cls from "./${firstCharToUpperCase(sliceName)}.module.scss";

interface ${firstCharToUpperCase(sliceName)}Props {
  className?: string;
}

const ${firstCharToUpperCase(sliceName)} = (props: ${firstCharToUpperCase(sliceName)}Props) => {
  const {
    className
  } = props;

	return (
		<div className={classNames(cls.${firstCharToUpperCase(sliceName)}, {}, [className])}>${firstCharToUpperCase(sliceName)}</div>
	);
};

export default ${firstCharToUpperCase(sliceName)};
`;
};