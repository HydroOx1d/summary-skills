import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Navbar> = {
	title: "widgets/Navbar",
	component: Navbar
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	render: () => <Navbar />,
};

export const Dark: Story = {
	render: () => <Navbar />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
