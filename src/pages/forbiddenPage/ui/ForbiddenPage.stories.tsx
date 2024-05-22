
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import ForbiddenPage from "./ForbiddenPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ForbiddenPage> = {
	title: "pages/ForbiddenPage",
	component: ForbiddenPage,
	decorators: [
		StoreDecorator({}),
	],
};

export default meta;

type Story = StoryObj<typeof ForbiddenPage>;

export const Default: Story = {
	render: (args) => <ForbiddenPage {...args} />,
};

export const Dark: Story = {
	render: (args) => <ForbiddenPage {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Blue: Story = {
	render: (args) => <ForbiddenPage {...args} />,
	decorators: [ThemeDecorator(Theme.BLUE)]
};
