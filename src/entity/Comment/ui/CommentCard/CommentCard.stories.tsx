import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "@/shared/assets/tests/storybook-avatar.jpg";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import CommentCard from "./CommentCard";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof CommentCard> = {
	title: "entity/CommentCard",
	component: CommentCard,
	decorators: [StoreDecorator({})],
	args: {
		comment: {
			id: 1,
			articleId: "1",
			content: "Comment",
			user: {
				id: "1",
				username: "Ox1d",
				avatar: Avatar
			}
		}
	}
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
	render: (args) => <CommentCard {...args} />,
};

export const Dark: Story = {
	render: (args) => <CommentCard {...args} />,
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};

export const WithoutAvatar: Story = {
	render: (args) => <CommentCard {...args} />,
	args: {
		comment: {
			id: 1,
			articleId: "1",
			content: "Comment",
			user: {
				id: "1",
				username: "Ox1d",
				avatar: undefined
			}
		}
	}
};
