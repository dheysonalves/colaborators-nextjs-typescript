import { ComponentMeta, ComponentStory } from '@storybook/react'

import Main from '.'

export default {
	title: 'Layout/Main',
	component: Main,
	args: {
		title: 'title default',
		description: 'description default'
	}
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />
