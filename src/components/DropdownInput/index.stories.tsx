import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DropdownInput from '.'

export default {
	title: 'Inputs/DropdownInput',
	component: DropdownInput,
	args: {
		label: 'Departamento',
	},
} as ComponentMeta<typeof DropdownInput>

export const Default: ComponentStory<typeof DropdownInput> = (args) => (
	<DropdownInput {...args} />
)
