import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
	title: "shared/Input",
	component: Input,
	args: {
    
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	render: () => <Input/>,
};

export const Placeholder: Story = {
	render: (args) => <Input {...args} />,
	args: {
		placeholder: "Placeholder"
	}
};
