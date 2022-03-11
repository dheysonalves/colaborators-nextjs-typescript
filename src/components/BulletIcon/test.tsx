import React from 'react'
import { IconType } from 'react-icons'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { FiFileText } from 'react-icons/fi'

import BulletIcon from '.'
import { theme } from '../../styles/theme/theme'

const setup = (Icon: IconType, isSmall: boolean, size: number) => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<BulletIcon Icon={Icon} isSmall={isSmall} iconSize={size} />,
		</ThemeProvider>,
	)
	return {
		...utils,
	}
}

describe('<BulletIcon />', () => {
	it('should render the heading', () => {
		const { container } = setup(FiFileText, true, 18)

		expect(container.firstChild).toHaveStyle({
			'background-color': '#CAD6D1',
		})

		expect(container.firstChild).toMatchSnapshot()
	})
})
