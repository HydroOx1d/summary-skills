import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import AddNewCommentForm from "./AddNewCommentForm";
import {action} from "@storybook/addon-actions";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof AddNewCommentForm> = {
	title: "features/AddNewCommentForm",
	component: AddNewCommentForm,
	decorators: [StoreDecorator({})],
	args: {
		onSendComment: action("onSendComment")
	},
};

export default meta;

type Story = StoryObj<typeof AddNewCommentForm>;

export const Default: Story = {
	render: (args) => <AddNewCommentForm {...args} />,
};

export const Dark: Story = {
	render: (args) => <AddNewCommentForm {...args} />,
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};

export const Blue: Story = {
	render: (args) => <AddNewCommentForm {...args} />,
	decorators: [
		ThemeDecorator(Theme.BLUE)
	]
};