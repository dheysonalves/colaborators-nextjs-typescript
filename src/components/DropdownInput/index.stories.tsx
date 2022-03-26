import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DropdownInput from '.'

export default {
	title: 'Inputs/DropdownInput',
	component: DropdownInput,
	args: {
		label: 'Departamento',
		data: ['Option 1', 'Option 2', 'Option 3'],
	},
} as ComponentMeta<typeof DropdownInput>

export const Default: ComponentStory<typeof DropdownInput> = (args) => (
	<DropdownInput {...args} />
)

export const WithoutLabel: ComponentStory<typeof DropdownInput> = () => {
	const [value, setValue] = useState<string | number>('')

	return (
		<DropdownInput
			hasLabel={false}
			label="Departamento"
			data={['Option 1', 'Option 2', 'Option 3']}
			value={value as string}
			setValue={setValue}
		/>
	)
}
