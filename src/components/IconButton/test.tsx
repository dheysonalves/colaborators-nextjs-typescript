import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'

import IconButton from '.'
import { theme } from '../../styles/theme/theme'
import { AiOutlineFileAdd } from 'react-icons/ai'

const setup = () => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<IconButton Icon={AiOutlineFileAdd} title="Ações" />,
		</ThemeProvider>,
	)
	const button = utils.getByLabelText('button-icon-submit') as HTMLButtonElement
	return {
		button,
		...utils,
	}
}

describe('<IconButton />', () => {
	it('should render the heading', () => {
		const { container } = setup()

		expect(screen.getByText('Ações')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
