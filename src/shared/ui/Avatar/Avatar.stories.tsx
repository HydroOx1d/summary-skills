import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import AvatarImg from "./storybook-avatar.jpg";

const meta: Meta<typeof Avatar> = {
	title: "shared/Avatar",
	component: Avatar,
	args: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	render: (args) => <Avatar {...args} />,
	args: {
		src: AvatarImg
	}

};