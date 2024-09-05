
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import ArticlePageGreeter from "./ArticlePageGreeter";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof ArticlePageGreeter> = {
	title: "features/ArticlePageGreeter",
	component: ArticlePageGreeter,
	decorators: [
		StoreDecorator({}),
	],
};

export default meta;

type Story = StoryObj<typeof ArticlePageGreeter>;

export const Default: Story = {
	render: (args) => <ArticlePageGreeter {...args} />,
};

export const Dark: Story = {
	render: (args) => <ArticlePageGreeter {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};
