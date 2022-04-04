import React from 'react'
import { render } from '@testing-library/react'

import BaseInput from '.'

const setup = () => {
	const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
	}

	const utils = render(
		<BaseInput
			placeholderText="Pesquise por"
			label="Pesquise por nome ou cpf"
			value=""
			handleChange={handleData}
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
		const { container } = setup()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('it should allow Colaboradores to be deleted', () => {
		const { container } = setup()

		expect(container.firstChild).toMatchSnapshot()
	})
})
