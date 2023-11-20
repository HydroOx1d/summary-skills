import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  element?: HTMLElement
}

const Portal = (props: React.PropsWithChildren<PortalProps>) => {
	const {
		children,
		element = document.body
	} = props;

	return createPortal(children, element);
};

export default Portal;