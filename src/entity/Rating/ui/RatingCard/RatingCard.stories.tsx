
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import Rating from "./RatingCard";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Rating> = {
	title: "entity/RatingCard",
	component: Rating,
	decorators: [
		StoreDecorator({}),
	],
	args: {
		title: "Оставьте отзыв",
		feedbackTitle: "Напишите свое мнение",
		hasFeedback: true
	}
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
	render: (args) => <Rating {...args} />,
};

export const Dark: Story = {
	render: (args) => <Rating {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Blue: Story = {
	render: (args) => <Rating {...args} />,
	decorators: [ThemeDecorator(Theme.BLUE)]
};
