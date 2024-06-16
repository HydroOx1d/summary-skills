
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import AdminPanelPage from "./AdminPanelPage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof AdminPanelPage> = {
	title: "pages/AdminPanelPage",
	component: AdminPanelPage,
	decorators: [
		StoreDecorator({}),
	],
};

export default meta;

type Story = StoryObj<typeof AdminPanelPage>;

export const Default: Story = {
	render: (args) => <AdminPanelPage {...args} />,
};

export const Dark: Story = {
	render: (args) => <AdminPanelPage {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Blue: Story = {
	render: (args) => <AdminPanelPage {...args} />,
	decorators: [ThemeDecorator(Theme.BLUE)]
};
