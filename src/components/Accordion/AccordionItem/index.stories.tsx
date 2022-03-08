import { ComponentMeta, ComponentStory } from '@storybook/react'
import AccordionItem from '.'
import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from '../../../api/@types/general.types'
export default {
	title: 'Composites/Accordion/AccordionItem',
	component: AccordionItem,
	args: {
		agent_id: 1,
		name: 'Pikachu Soares do Santos Dias',
		branch: '123456789',
		department: DepartamentRolesTypes.ADMINISTRATIVE,
		role: NameRolesTypes.ANALYST,
		status: AgentStatusTypes.ACTIVE,
	},
} as ComponentMeta<typeof AccordionItem>

export const Default: ComponentStory<typeof AccordionItem> = (args) => (
	<AccordionItem {...args} />
)
