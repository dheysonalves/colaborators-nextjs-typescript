import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BaseInput from '.'

describe('<BaseInput />', () => {
	const utils = render(
		<BaseInput
			placeholderText="Pesquise por"
			label="Pesquise por nome ou cpf"
		/>
	)
	it('should fire a input event', () => {
		const input = utils.getByLabelText('base-search-input') as HTMLInputElement

		fireEvent.change(input, { target: { value: 'Colaboradores' } })
		expect(input.value).toBe('Colaboradores')

		expect(utils.container.firstChild).toMatchSnapshot()
	})
})
