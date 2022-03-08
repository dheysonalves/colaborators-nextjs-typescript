import React from 'react'
import { Button, Title } from './styles'
import { IconType } from 'react-icons/lib'

interface IconButtonProps {
	Icon: IconType
	title: string
	callback?: () => void
}

const IconButton = ({ Icon, title, callback }: IconButtonProps) => {
	return (
		<Button onClick={callback} aria-label="button-icon-submit">
			<Icon size={24} color={'#1DD195'} />
			<Title tag="p">{title}</Title>
		</Button>
	)
}

export default IconButton
