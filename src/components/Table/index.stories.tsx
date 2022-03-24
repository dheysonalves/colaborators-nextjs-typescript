import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Table from '.'

import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from '../../api/@types/general.types'

export default {
	title: 'Composites/Table',
	component: Table,
	args: {
		data: [
			{
				id: 1,
				branch: 'Quartel General',
				department: DepartamentRolesTypes.ADMINISTRATIVE,
				name: 'Pikachu Soares do Santos Dias',
				role: NameRolesTypes.ANALYST,
				status: AgentStatusTypes.ACTIVE,
			},
			{
				id: 2,
				branch: 'Quartel General',
				department: DepartamentRolesTypes.ADMINISTRATIVE,
				name: 'Pikachu Soares do Santos Dias',
				role: NameRolesTypes.ANALYST,
				status: AgentStatusTypes.ACTIVE,
			},
			{
				id: 3,
				branch: 'Quartel General',
				department: DepartamentRolesTypes.ADMINISTRATIVE,
				name: 'Pikachu Soares do Santos Dias',
				role: NameRolesTypes.ANALYST,
				status: AgentStatusTypes.ACTIVE,
			},
			{
				id: 4,
				branch: 'Quartel General',
				department: DepartamentRolesTypes.ADMINISTRATIVE,
				name: 'Pikachu Soares do Santos Dias',
				role: NameRolesTypes.ANALYST,
				status: AgentStatusTypes.ACTIVE,
			},
			{
				id: 5,
				branch: 'Quartel General',
				department: DepartamentRolesTypes.ADMINISTRATIVE,
				name: 'Pikachu Soares do Santos Dias',
				role: NameRolesTypes.ANALYST,
				status: AgentStatusTypes.ACTIVE,
			},
		],
		rowsPerPage: 4,
	},
} as ComponentMeta<typeof Table>

export const Default: ComponentStory<typeof Table> = (args) => (
	<Table {...args} />
)
