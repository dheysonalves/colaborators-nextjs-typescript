import { render, screen } from '@testing-library/react'

import StatusPin from '.'

describe('<StatusPin />', () => {
	it('should render the heading', () => {
		const { container } = render(<StatusPin />)

		expect(
			screen.getByRole('heading', { name: /StatusPin/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
