import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseInput from '.'
import useTextInput from '../../hooks/useTextInput/useTextInput'

export default {
	title: 'Inputs/BaseInput',
	component: BaseInput,
	args: {
		label: 'Pesquise por',
		placeholderText: 'Pesquise por nome ou cpf',
	},
} as ComponentMeta<typeof BaseInput>

export const Default: ComponentStory<typeof BaseInput> = (args) => {
	const { text, updateText } = useTextInput()
	return <BaseInput {...args} value={text} handleChange={updateText} />
}
