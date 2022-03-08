import { ComponentMeta, ComponentStory } from '@storybook/react'
import StatusPin from '.'

export default {
	title: 'Composites/StatusPin',
	component: StatusPin,
} as ComponentMeta<typeof StatusPin>

export const Default: ComponentStory<typeof StatusPin> = () => <StatusPin />
