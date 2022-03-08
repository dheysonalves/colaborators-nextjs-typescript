import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'
import { theme } from '../../styles/theme/theme'

import UserDetails from '.'

global.window.matchMedia = jest.fn().mockReturnValue({
	matches: true,
	addListener: () => {
		return
	},
	removeListener: () => {
		return
	},
})

const setup = () => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<UserDetails name="Luiz Zlochevsky" status="meus dados" />
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<UserDetails />', () => {
	it('should render the heading name and status', () => {
		const { container } = setup()

		expect(
			screen.getByRole('heading', { name: /Luiz Zlochevsky/i }),
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /meus dados/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
