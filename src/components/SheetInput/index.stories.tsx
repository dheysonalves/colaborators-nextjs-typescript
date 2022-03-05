import { ComponentMeta, ComponentStory } from '@storybook/react'
import SheetInput from '.'

export default {
	title: 'Inputs/SheetInput',
	component: SheetInput,
	args: {
		title: 'Colaboradores'
	}
} as ComponentMeta<typeof SheetInput>

export const Default: ComponentStory<typeof SheetInput> = (args) => (
	<SheetInput {...args} />
)
