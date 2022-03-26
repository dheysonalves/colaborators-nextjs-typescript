import React from 'react'

import { render, screen } from '@testing-library/react'

import { ThemeProvider } from '@emotion/react'

import DropdownInput from '.'
import { theme } from '../../styles/theme/theme'

const setup = () => {
	const updateValue = (value: string) => {
		return value
	}

	const utils = render(
		<ThemeProvider theme={theme}>
			<DropdownInput
				label="Departamento"
				data={['1', '2', '3']}
				value="1"
				setValue={() => updateValue('2')}
			/>
			,
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<DropdownInput />', () => {
	it('should render the heading', () => {
		const { container } = setup()

		expect(screen.getByText('Departamento')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
