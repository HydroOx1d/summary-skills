import type { Meta, StoryObj } from "@storybook/react";
import Popover from "./Popover";
import Button from "../deprecated/Button/Button";

const meta: Meta<typeof Popover> = {
	title: "shared/Popover",
	component: Popover,
	args: {
		trigger: <Button>popover</Button>,
		children: <div>
			<div>Option 1 something else</div>
			<div>Option 1 another one</div>
			<div>Option 1</div>
			<div>Option 1</div>
		</div>
	},
	decorators: [
		(Story) => (
			<div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
				<Story />
			</div>
		)
	]
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	render: (args) => <Popover {...args}/>,
};


export const BottomRight: Story = {
	render: (args) => <Popover {...args}/>,
	args: {
		direction: "bottom right"
	}
};
export const TopLeft: Story = {
	render: (args) => <Popover {...args}/>,
	args: {
		direction: "top left"
	}
};
export const TopRight: Story = {
	render: (args) => <Popover {...args}/>,
	args: {
		direction: "top right"
	}
};