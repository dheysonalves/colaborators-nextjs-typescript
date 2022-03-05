import { ComponentMeta, ComponentStory } from '@storybook/react'
import UserDetails from '.'

export default {
	title: 'Layout/NavBar/UserDetails',
	component: UserDetails,
	args: {
		name: 'Luiz Zlochevsky',
		status: 'meus dados'
	}
} as ComponentMeta<typeof UserDetails>

export const Default: ComponentStory<typeof UserDetails> = (args) => (
	<UserDetails {...args} />
)
