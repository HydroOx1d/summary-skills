import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Skeleton> = {
	title: "shared/Skeleton",
	component: Skeleton,
	args: {
    
	},
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	render: (args) => <Skeleton {...args} />,
};

export const DefaultDark: Story = {
	render: (args) => <Skeleton {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Circle: Story = {
	render: (args) => <Skeleton {...args} />,
	args: {
		width: 100,
		height: 100,
		border: "50%"
	}
};


export const CircleDark: Story = {
	render: (args) => <Skeleton {...args} />,
	args: {
		width: 100,
		height: 100,
		border: "50%",
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};
