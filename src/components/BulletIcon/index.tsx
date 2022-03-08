import React from 'react'
import { ContainerIcon } from './styles'
import { IconType } from 'react-icons'

interface BulletIconProps {
	Icon: IconType
	iconSize?: string | number
	isSmall: boolean
}

const BulletIcon = ({ Icon, iconSize = 18, isSmall }: BulletIconProps) => {
	return (
		<ContainerIcon isSmall={isSmall}>
			<Icon size={iconSize} color="#465953" aria-label="icon-component" />
		</ContainerIcon>
	)
}

export default BulletIcon
