import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconButton from '.'
import { AiOutlineFileAdd } from 'react-icons/ai'

export default {
	title: 'Buttons/IconButton',
	component: IconButton,
	args: {
		Icon: AiOutlineFileAdd,
		title: 'Ações',
	},
} as ComponentMeta<typeof IconButton>

export const Default: ComponentStory<typeof IconButton> = (args) => (
	<IconButton {...args} />
)
