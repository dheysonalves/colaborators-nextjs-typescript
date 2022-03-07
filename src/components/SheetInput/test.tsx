import { render, screen } from '@testing-library/react'

import SheetInput from '.'

const setup = () => {
	const utils = render(<SheetInput title="Colaboradores" />)
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
