import { ComponentMeta, ComponentStory } from '@storybook/react'
import IconButton from '.'
import { AiOutlineFileAdd, AiOutlineReload } from 'react-icons/ai'

export default {
	title: 'Buttons/IconButton',
	component: IconButton,
	args: {
		Icon: AiOutlineFileAdd,
		title: 'Ações',
	},
} as ComponentMeta<typeof IconButton>

export const ActionsButton: ComponentStory<typeof IconButton> = (args) => (
	<IconButton {...args} />
)

export const LoaderButton: ComponentStory<typeof IconButton> = () => (
	<IconButton Icon={AiOutlineReload} title="Carregar mais" />
)
