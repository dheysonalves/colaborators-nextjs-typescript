import React from 'react'
import { render, screen } from '@testing-library/react'
import { theme } from '../../styles/theme/theme'

import SheetInput from '.'
import { ThemeProvider } from '@emotion/react'

const setup = () => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<SheetInput title="Colaboradores" />{' '}
		</ThemeProvider>,
	)
	const button = utils.getByLabelText('icon-button') as HTMLButtonElement
	return {
		button,
		...utils,
	}
}

describe('<SheetInput />', () => {
	it('should render the input heading', () => {
		const { container } = setup()

		expect(
			screen.getByRole('heading', { name: /Colaboradores/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
