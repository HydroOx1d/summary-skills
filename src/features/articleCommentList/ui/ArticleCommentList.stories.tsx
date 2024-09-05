import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "@/shared/assets/tests/storybook-avatar.jpg";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import ArticleCommentList from "./ArticleCommentList";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof ArticleCommentList> = {
	title: "features/ArticleCommentList",
	component: ArticleCommentList,
	decorators: [StoreDecorator({})],
	args: {
		comments: [
			{
				id: 1,
				articleId: "1",
				content: "Comment",
				user: {
					id: "1",
					username: "Ox1d",
					avatar: Avatar,
				},
			},
			{
				id: 2,
				articleId: "2",
				content: "Comment 2",
				user: {
					id: "1",
					username: "Ox1d",
					avatar: Avatar,
				},
			},
		],
	},
};

export default meta;

type Story = StoryObj<typeof ArticleCommentList>;

export const Default: Story = {
	render: (args) => <ArticleCommentList {...args} />,
};

export const Dark: Story = {
	render: (args) => <ArticleCommentList {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
