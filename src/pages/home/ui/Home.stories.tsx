import type { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof Home> = {
	title: "pages/Home",
	component: Home,
	decorators: [
		StoreDecorator({})
	]
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Light: Story = {
	render: () => <Home />,
};

export const Dark: Story = {
	render: () => <Home />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
