import { render, screen } from '@testing-library/react'

import UserDetails from '.'

global.window.matchMedia = jest.fn().mockReturnValue({
	matches: true,
	addListener: () => {
		return
	},
	removeListener: () => {
		return
	}
})

describe('<UserDetails />', () => {
	it('should render the heading name and status', () => {
		const { container } = render(
			<UserDetails name="Luiz Zlochevsky" status="meus dados" />
		)

		expect(
			screen.getByRole('heading', { name: /Luiz Zlochevsky/i })
		).toBeInTheDocument()

		expect(
			screen.getByRole('heading', { name: /meus dados/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
