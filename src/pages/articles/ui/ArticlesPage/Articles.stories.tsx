import type { Meta, StoryObj } from "@storybook/react";
import Article from "./Articles";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta: Meta<typeof Article> = {
	title: "pages/Articles",
	component: Article,
	decorators: [
		StoreDecorator({})
	]
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Light: Story = {
	render: () => <Article />,
};

export const Dark: Story = {
	render: () => <Article />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
