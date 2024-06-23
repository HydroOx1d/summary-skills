import type { Meta, StoryObj } from "@storybook/react";
import NotFound from "./NotFound";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";

const meta: Meta<typeof NotFound> = {
	title: "pages/NotFound",
	component: NotFound,
	decorators: [
		StoreDecorator({})
	]
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Light: Story = {
	render: () => <NotFound />,
};

export const Dark: Story = {
	render: () => <NotFound />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
