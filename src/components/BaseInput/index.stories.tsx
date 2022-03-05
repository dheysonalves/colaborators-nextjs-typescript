import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseInput from '.'

export default {
	title: 'Inputs/BaseInput',
	component: BaseInput,
	args: {
		label: 'Pesquise por',
		placeholderText: 'Pesquise por nome ou cpf'
	}
} as ComponentMeta<typeof BaseInput>

export const Default: ComponentStory<typeof BaseInput> = (args) => {
	return <BaseInput {...args} />
}
