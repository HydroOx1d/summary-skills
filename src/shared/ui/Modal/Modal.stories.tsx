import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
	title: "widgets/Modal",
	component: Modal,
	args: {
		children: "lorem aslkfjaslj fklasj flkasfj alksj aslkj aslk jalksj sklafjaslkjlksaj lkasj flaskjfalsf jaklj sakfj alsk jalk jlks",
		isOpen: true
	}
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Light: Story = {
	render: (args) => <Modal {...args} />,
};

export const Dark: Story = {
	render: (args) => <Modal {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
