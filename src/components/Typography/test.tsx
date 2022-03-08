import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'

import { theme } from '../../styles/theme/theme'

import Typography from '.'

const setup = (tag: 'h1' | 'h2' | 'h3' | 'p', text: string) => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<Typography tag={tag}>{text}</Typography>
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<Typography />', () => {
	it('should render the heading', () => {
		const { container } = setup('h1', 'Typography H1')

		expect(
			screen.getByRole('heading', { name: /Typography H1/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the heading 2', () => {
		const { container } = setup('h2', 'Typography H2')

		expect(
			screen.getByRole('heading', { name: /Typography H2/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the heading 3', () => {
		const { container } = setup('h3', 'Typography H3')

		expect(
			screen.getByRole('heading', { name: /Typography H3/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the paragraph', () => {
		const { container } = setup('p', 'Typography p')

		expect(screen.getByText('Typography p')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
