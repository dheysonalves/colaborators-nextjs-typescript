import { render, screen } from '@testing-library/react'

import AccordionItem from '.'

describe('<AccordionItem />', () => {
	it('should render the heading', () => {
		const { container } = render(<AccordionItem />)

		expect(
			screen.getByRole('heading', { name: /Nome completo/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
