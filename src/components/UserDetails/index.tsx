import React from 'react'
import { UserAvatar, Name } from './styles'
import { BaseTypography, Paragraph } from '../Typography/base.index'
import { Container } from '../utils/Flex/flex.styles'
import getInitialsName from '../../utils/getInitials'
import Media from 'react-media'

interface UserDetailsProps {
	name: string
	status: string
}

const UserDetails = ({ name, status }: UserDetailsProps) => {
	return (
		<Container>
			<UserAvatar>
				<Name tag="p">{getInitialsName(name)}</Name>
			</UserAvatar>
			<Media
				query="(min-width: 1200px)"
				render={() => (
					<Container column>
						<BaseTypography tag="h1">{name}</BaseTypography>
						<Paragraph tag="h2">{status}</Paragraph>
					</Container>
				)}
			/>
		</Container>
	)
}

export default UserDetails
