import React from "react";
import Flex, { FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

const VStack = (props: React.PropsWithChildren<VStackProps>) => {
	return (
		<Flex direction="column" {...props}/>
	);
};

export default VStack;