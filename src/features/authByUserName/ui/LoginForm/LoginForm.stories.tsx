import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";

const meta: Meta<typeof LoginForm> = {
	title: "features/LoginForm",
	component: LoginForm,
	args: {},
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
	render: () => <LoginForm />,
	decorators: [
		StoreDecorator({
			loginForm: {
				username: "Test",
				password: "123"
			}
		})
	]
};

export const Error: Story = {
	render: () => <LoginForm/>,
	decorators: [
		StoreDecorator({
			loginForm: {
				error: "Error"
			}
		})
	]
};

export const IsLoading: Story = {
	render: () => <LoginForm />,
	decorators: [
		StoreDecorator({
			loginForm: {
				isLoading: true
			},
		}),
	],
};