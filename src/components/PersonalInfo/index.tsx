import React from 'react'
import { IconType } from 'react-icons'

import { BorderContainer, TextContainer, Title, Subtitle } from './styles'
import BulletIcon from '../BulletIcon/index'

interface PersonalInfoProps {
	title: string
	subtitle: string
	IconName: IconType
}

const PersonalInfo = ({ title, subtitle, IconName }: PersonalInfoProps) => {
	return (
		<BorderContainer>
			<BulletIcon Icon={IconName} iconSize={18} isSmall />
			<TextContainer>
				<Title tag="h2">{title}</Title>
				<Subtitle tag="p">{subtitle}</Subtitle>
			</TextContainer>
		</BorderContainer>
	)
}

export default PersonalInfo
