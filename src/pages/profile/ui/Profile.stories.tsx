import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta: Meta<typeof Profile> = {
	title: "pages/Profile",
	component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Light: Story = {
	render: () => <Profile />,
	decorators: [
		StoreDecorator({
		})
	]
};

export const Dark: Story = {
	render: () => <Profile />,
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
