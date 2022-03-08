import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'

import AccordionItem from '.'
import { theme } from '../../../styles/theme/theme'
import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from 'api/@types/general.types'

const MOCK_DATA = {
	agent_id: 1,
	name: 'Pikachu Soares do Santos Dias',
	branch: 'Quartel General',
	department: DepartamentRolesTypes.ADMINISTRATIVE,
	image: '/img/brand.svg',
	role: NameRolesTypes.ANALYST,
	status: AgentStatusTypes.ACTIVE,
}

const setup = () => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<AccordionItem data={MOCK_DATA} />
		</ThemeProvider>,
	)
	const button = utils.getByLabelText('button-toogle') as HTMLButtonElement

	return {
		button,
		...utils,
	}
}

describe('<AccordionItem />', () => {
	it('should render the name `Pikachu Soares do Santos Dias`', () => {
		const { container, button } = setup()

		fireEvent.click(button)

		expect(
			screen.getByRole('heading', { name: /Nome completo/i }),
		).toBeInTheDocument()

		expect(
			screen.getByText('Pikachu Soares do Santos Dias'),
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the department `Administrativo`', () => {
		const { container, button } = setup()

		fireEvent.click(button)

		expect(
			screen.getByRole('heading', { name: /Departamento/i }),
		).toBeInTheDocument()

		expect(screen.getByText('Administrativo')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the branch `Quartel General`', () => {
		const { container, button } = setup()

		fireEvent.click(button)

		expect(
			screen.getByRole('heading', { name: /Unidade/i }),
		).toBeInTheDocument()

		expect(screen.getByText('Quartel General')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the role `Analista`', () => {
		const { container, button } = setup()

		fireEvent.click(button)

		expect(screen.getByRole('heading', { name: /Cargo/i })).toBeInTheDocument()

		expect(screen.getByText('Analista')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})

	it('should render the status `Ativo`', () => {
		const { container, button } = setup()

		fireEvent.click(button)

		expect(screen.getByRole('heading', { name: /Status/i })).toBeInTheDocument()

		expect(screen.getByText('Ativo')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
