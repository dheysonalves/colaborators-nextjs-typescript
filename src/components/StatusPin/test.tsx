import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { AgentStatusTypes } from '../../api/@types/general.types'
import { theme } from '../../styles/theme/theme'
import StatusPin from '.'
import { ThemeProvider } from '@emotion/react'

const setup = (status: AgentStatusTypes) => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<StatusPin status={status} />
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<StatusPin />', () => {
	afterEach(cleanup)

	it('should render the heading Ativo', () => {
		const { container } = setup(AgentStatusTypes.ACTIVE)

		expect(screen.getByRole('heading', { name: /Ativo/i })).toBeInTheDocument()
		expect(container.firstChild).toHaveStyle({
			'background-color': '#B5F1DD',
		})

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the heading Inativo', () => {
		const { container } = setup(AgentStatusTypes.INACTIVE)

		expect(
			screen.getByRole('heading', { name: /Inativo/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toHaveStyle({
			'background-color': '#EAEFED',
		})

		expect(container.firstChild).toMatchSnapshot()
	})
})
