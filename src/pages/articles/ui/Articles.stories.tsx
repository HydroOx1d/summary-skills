import type { Meta, StoryObj } from "@storybook/react";
import Article from "./Articles";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Article> = {
	title: "pages/Article",
	component: Article,
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
