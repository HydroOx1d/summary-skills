import type { Meta, StoryObj } from "@storybook/react";
import {AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof AppLink> = {
	title: "shared/AppLink",
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
		theme: AppLinkTheme.PRIMARY,
	},
};

export const PrimaryDark: Story = {
	render: (args) => <AppLink {...args}>{args.children}</AppLink>,
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};

export const Secondary: Story = {
	render: (args) => <AppLink {...args}>{args.children}</AppLink>,
	args: {
		theme: AppLinkTheme.SECONDARY
	}
};

export const SecondaryDark: Story = {
	render: (args) => <AppLink {...args}>{args.children}</AppLink>,
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
};