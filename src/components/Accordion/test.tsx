import { render, screen } from '@testing-library/react'

import Accordion from '.'

describe('<Accordion />', () => {
	it('should render the heading', () => {
		const { container } = render(<Accordion />)

		expect(
			screen.getByRole('heading', { name: /Accordion/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
