import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'
import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from '../../api/@types/general.types'
import { theme } from '../../styles/theme/theme'

import Table from '.'

const DATA = [
	{
		id: 1,
		branch: 'Quartel General',
		department: DepartamentRolesTypes.ADMINISTRATIVE,
		name: 'Pikachu Soares do Santos Dias',
		role: NameRolesTypes.ANALYST,
		status: AgentStatusTypes.ACTIVE,
		image:
			'https://dailystatuss.com/wp-content/uploads/2022/02/273537712_1855045481347254_3794366435422454151_n.jpg',
	},
	{
		id: 2,
		branch: 'Quartel General',
		department: DepartamentRolesTypes.ADMINISTRATIVE,
		name: 'Pikachu Soares do Santos Dias',
		role: NameRolesTypes.ANALYST,
		status: AgentStatusTypes.ACTIVE,
		image:
			'https://dailystatuss.com/wp-content/uploads/2022/02/273537712_1855045481347254_3794366435422454151_n.jpg',
	},
	{
		id: 3,
		branch: 'Quartel General',
		department: DepartamentRolesTypes.ADMINISTRATIVE,
		name: 'Pikachu Soares do Santos Dias',
		role: NameRolesTypes.ANALYST,
		status: AgentStatusTypes.ACTIVE,
		image:
			'https://dailystatuss.com/wp-content/uploads/2022/02/273537712_1855045481347254_3794366435422454151_n.jpg',
	},
	{
		id: 4,
		branch: 'Quartel General',
		department: DepartamentRolesTypes.ADMINISTRATIVE,
		name: 'Pikachu Soares do Santos Dias',
		role: NameRolesTypes.ANALYST,
		status: AgentStatusTypes.ACTIVE,
		image:
			'https://dailystatuss.com/wp-content/uploads/2022/02/273537712_1855045481347254_3794366435422454151_n.jpg',
	},
	{
		id: 5,
		branch: 'Quartel General',
		department: DepartamentRolesTypes.ADMINISTRATIVE,
		name: 'Pikachu Soares do Santos Dias',
		role: NameRolesTypes.ANALYST,
		status: AgentStatusTypes.ACTIVE,
		image:
			'https://dailystatuss.com/wp-content/uploads/2022/02/273537712_1855045481347254_3794366435422454151_n.jpg',
	},
]

const setup = () => {
	const utils = render(
		<ThemeProvider theme={theme}>
			<Table data={DATA} rowsPerPage={2} />,
		</ThemeProvider>,
	)

	return {
		...utils,
	}
}

describe('<Table />', () => {
	it('should render the heading', () => {
		const { container } = setup()

		expect(screen.getByText('Nome Completo')).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
