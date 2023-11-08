import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
	title: "widgets/Sidebar",
	component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
	render: () => <Sidebar/>
};

export const Dark: Story = {
	render: () => <Sidebar />,
	decorators: [ThemeDecorator(Theme.DARK)]
};
