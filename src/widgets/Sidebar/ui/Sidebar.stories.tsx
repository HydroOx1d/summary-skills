import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";

const meta: Meta<typeof Sidebar> = {
	title: "widgets/Sidebar",
	component: Sidebar,
	decorators: [
		StoreDecorator({
			user: {
				authData: {}
			}
		})
	]
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
	render: () => <Sidebar />,
};

export const Light: Story = {
	render: () => <Sidebar />,
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
	render: () => <Sidebar />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const NoAuth: Story = {
	render: () => <Sidebar />,
	decorators: [
		StoreDecorator({
			user: {
				authData: undefined
			}
		})
	],
};