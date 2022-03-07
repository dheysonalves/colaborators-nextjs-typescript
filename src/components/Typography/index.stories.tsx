import { ComponentMeta, ComponentStory } from '@storybook/react'
import Typography from '.'

export default {
	title: 'Shared/Typography',
	component: Typography,
	args: {
		tag: 'h1',
		children: (
			<>
				<h1>Typography H1</h1>
			</>
		),
	},
} as ComponentMeta<typeof Typography>

export const Default: ComponentStory<typeof Typography> = (args) => (
	<Typography {...args} />
)
