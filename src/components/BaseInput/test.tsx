import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BaseInput from '.'

const setup = () => {
	const utils = render(
		<BaseInput
			placeholderText="Pesquise por"
			label="Pesquise por nome ou cpf"
		/>,
	)
	const input = utils.getByLabelText('base-search-input') as HTMLInputElement
	return {
		input,
		...utils,
	}
}

describe('<BaseInput />', () => {
	it('it should type Colaboradores in text-input', () => {
		const { input, container } = setup()

		fireEvent.change(input, { target: { value: 'Colaboradores' } })
		expect(input.value).toBe('Colaboradores')

		expect(container.firstChild).toMatchSnapshot()
	})

	it('it should allow Colaboradores to be deleted', () => {
		const { input, container } = setup()

		fireEvent.change(input, { target: { value: 'Colaboradores' } })
		expect(input.value).toBe('Colaboradores')
		fireEvent.change(input, { target: { value: '' } })
		expect(input.value).toBe('')

		expect(container.firstChild).toMatchSnapshot()
	})
})
