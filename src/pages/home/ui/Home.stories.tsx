import type { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Home> = {
	title: "pages/Home",
	component: Home,
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
