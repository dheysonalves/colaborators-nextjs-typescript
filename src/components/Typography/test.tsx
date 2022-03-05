import { render, screen } from '@testing-library/react'

import Typography from '.'

describe('<Typography />', () => {
	it('should render the heading', () => {
		const { container } = render(
			<Typography tag={'h1'}>
				<>Typography H1</>
			</Typography>
		)

		expect(
			screen.getByRole('heading', { name: /Typography H1/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
