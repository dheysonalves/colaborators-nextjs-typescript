import { ComponentMeta, ComponentStory } from '@storybook/react'
import AccordionItem from '.'

export default {
	title: 'Composites/Accordion/AccordionItem',
	component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>

export const Default: ComponentStory<typeof AccordionItem> = () => (
	<AccordionItem />
)
