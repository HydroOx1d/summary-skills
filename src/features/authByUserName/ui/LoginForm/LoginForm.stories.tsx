import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof LoginForm> = {
	title: "features/LoginForm",
	component: LoginForm,
	args: {},
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
	render: () => <LoginForm />,
};