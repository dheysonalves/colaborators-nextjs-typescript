import { render, screen } from '@testing-library/react'

import { ThemeProvider } from '@emotion/react'

import DropdownInput from '.'
import { theme } from '../../styles/theme/theme'

const setup = () => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<DropdownInput label="Departamento" />,
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<DropdownInput />', () => {
	it('should render the heading', () => {
		const { container } = setup()

		expect(screen.getByText('Departamento')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
