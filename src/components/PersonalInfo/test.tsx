import React from 'react'

import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { IconType } from 'react-icons'
import { FiFileText } from 'react-icons/fi'

import { theme } from '../../styles/theme/theme'

import PersonalInfo from '.'

const setup = (Icon: IconType, title: string, subtitle: string) => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<PersonalInfo IconName={Icon} title={title} subtitle={subtitle} />,
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<PersonalInfo />', () => {
	it('should render the heading', () => {
		const { container } = setup(FiFileText, 'Telefone', '+55 82 2512 6627')

		expect(
			screen.getByRole('heading', { name: /Telefone/i }),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
