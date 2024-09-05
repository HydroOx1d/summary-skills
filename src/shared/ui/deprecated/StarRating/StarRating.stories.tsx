import type { Meta, StoryObj } from "@storybook/react";
import StarRating from "./StarRating";

const meta: Meta<typeof StarRating> = {
	title: "shared/StarRating",
	component: StarRating,
	args: {
		size: 40
	}
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
	render: (args) => <StarRating {...args} />
};

export const SelectedRating: Story = {
	render: (args) => <StarRating {...args} />,
	args: {
		selectedRating: 4
	}
};
