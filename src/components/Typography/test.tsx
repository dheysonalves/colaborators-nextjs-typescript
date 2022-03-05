import { render, screen } from '@testing-library/react'

import Typography from '.'

describe('<Typography />', () => {
	it('should render the heading', () => {
		const { container } = render(
			<Typography tag={'h1'}>Typography H1</Typography>
		)

		expect(
			screen.getByRole('heading', { name: /Typography H1/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the heading 2', () => {
		const { container } = render(
			<Typography tag={'h2'}>Typography H2</Typography>
		)

		expect(
			screen.getByRole('heading', { name: /Typography H2/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the heading 3', () => {
		const { container } = render(
			<Typography tag={'h3'}>Typography H3</Typography>
		)

		expect(
			screen.getByRole('heading', { name: /Typography H3/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the paragraph', () => {
		const { container } = render(
			<Typography tag={'p'}>Typography p</Typography>
		)

		expect(screen.getByText('Typography p')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
