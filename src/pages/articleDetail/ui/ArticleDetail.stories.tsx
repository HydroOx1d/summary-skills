import type { Meta, StoryObj } from "@storybook/react";
import ArticleDetail from "./ArticleDetail";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleDetail> = {
	title: "pages/ArticleDetail",
	component: ArticleDetail,
};

export default meta;

type Story = StoryObj<typeof ArticleDetail>;

export const Light: Story = {
	render: () => <ArticleDetail />,
};

export const Dark: Story = {
	render: () => <ArticleDetail />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
