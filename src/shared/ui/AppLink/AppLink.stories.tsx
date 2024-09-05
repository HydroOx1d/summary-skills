import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";
import type { Meta, StoryObj } from "@storybook/react";
import AppLink from "./AppLink";

const meta: Meta<typeof AppLink> = {
	title: "shared/AppLinkRedesigned",
	component: AppLink,
	args: {
		children: "Link"
	}
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	render: (args) => <AppLink {...args}>{args.children}</AppLink>,
	args: {
		variant: "primary",
	},
};

export const PrimaryDark: Story = {
	render: (args) => <AppLink {...args}>{args.children}</AppLink>,
	args: {
		variant: "primary"
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};

export const Secondary: Story = {
	render: (args) => <AppLink {...args}>{args.children}</AppLink>,
	args: {
		variant: "secondary"
	}
};

export const SecondaryDark: Story = {
	render: (args) => <AppLink {...args}>{args.children}</AppLink>,
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		variant: "secondary",
	},
};