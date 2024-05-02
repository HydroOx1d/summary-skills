import type { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Flex> = {
	title: "shared/Flex",
	component: Flex,
	args: {
    
	},
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Row: Story = {
	render: (args) => <Flex {...args} />,
	args: {
		children: <>
			<div>Text</div>
			<div>Text</div>
			<div>Text</div>
			<div>Text</div>
		</>
	}
};

export const Column: Story = {
	render: (args) => <Flex {...args} />,
	args: {
		children: <>
			<div>Text</div>
			<div>Text</div>
			<div>Text</div>
			<div>Text</div>
		</>,
		direction: "column"
	}
};

export const Gap: Story = {
	render: (args) => <Flex {...args} />,
	args: {
		children: <>
			<div>Text</div>
			<div>Text</div>
			<div>Text</div>
			<div>Text</div>
		</>,
		gap: "8"
	}
};