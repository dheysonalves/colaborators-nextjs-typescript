import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import BulletIcon from '.'
import { FiFileText, FiPhoneCall, FiCalendar, FiUser } from 'react-icons/fi'

export default {
	title: 'General/BulletIcon',
	component: BulletIcon,
	args: {
		Icon: FiFileText,
		iconSize: 18,
		isSmall: true,
	},
} as ComponentMeta<typeof BulletIcon>

export const RegisterIcon: ComponentStory<typeof BulletIcon> = (args) => (
	<BulletIcon {...args} />
)

export const PhoneIcon: ComponentStory<typeof BulletIcon> = () => (
	<BulletIcon Icon={FiPhoneCall} iconSize={18} isSmall={true} />
)

export const CalendarIcon: ComponentStory<typeof BulletIcon> = () => (
	<BulletIcon Icon={FiCalendar} iconSize={18} isSmall />
)

export const UserIcon: ComponentStory<typeof BulletIcon> = () => (
	<BulletIcon Icon={FiUser} iconSize={38} isSmall={false} />
)
