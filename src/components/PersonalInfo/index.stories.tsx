import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PersonalInfo from '.'
import { FiFileText, FiPhoneCall, FiCalendar } from 'react-icons/fi'

export default {
	title: 'Composites/PersonalInfo',
	component: PersonalInfo,
	args: {
		title: 'Telefone',
		subtitle: '+55 82 2512 6627',
		IconName: FiPhoneCall,
	},
} as ComponentMeta<typeof PersonalInfo>

export const PhoneInfo: ComponentStory<typeof PersonalInfo> = (args) => (
	<PersonalInfo {...args} />
)

export const CPFInfo: ComponentStory<typeof PersonalInfo> = () => (
	<PersonalInfo title="CPF" subtitle="869 748 070 15" IconName={FiFileText} />
)

export const DateInfo: ComponentStory<typeof PersonalInfo> = () => (
	<PersonalInfo
		title="Nascimento"
		subtitle="29/11/1990"
		IconName={FiCalendar}
	/>
)
