import { ComponentMeta, ComponentStory } from '@storybook/react'
import NavBar from './index'

export default {
	title: 'Layout/NavBar',
	component: NavBar,
} as ComponentMeta<typeof NavBar>

export const Default: ComponentStory<typeof NavBar> = () => <NavBar />
