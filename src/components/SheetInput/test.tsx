import { render, screen } from '@testing-library/react'

import SheetInput from '.'

describe('<SheetInput />', () => {
	it('should render the heading', () => {
		const { container } = render(<SheetInput title="Colaboradores" />)

		expect(
			screen.getByRole('heading', { name: /Colaboradores/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
