import { render } from '@testing-library/react'

import NavBar from '.'

global.window.matchMedia = jest.fn().mockReturnValue({
	matches: true,
	addListener: () => {
		return
	},
	removeListener: () => {
		return
	},
})

describe('<NavBar />', () => {
	it('should render the heading', () => {
		beforeEach(() => {
			window.matchMedia('(max-width: 1199px)')
		})
		const { container } = render(<NavBar />)

		expect(container.firstChild).toMatchSnapshot()
	})
})
