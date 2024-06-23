
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import ArticleRating from "./ArticleRating";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof ArticleRating> = {
	title: "features/ArticleRating",
	component: ArticleRating,
	decorators: [
		StoreDecorator({}),
	],
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const Default: Story = {
	render: (args) => <ArticleRating {...args} />,
};

export const Dark: Story = {
	render: (args) => <ArticleRating {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Blue: Story = {
	render: (args) => <ArticleRating {...args} />,
	decorators: [ThemeDecorator(Theme.BLUE)]
};
