import React from 'react'
import {
	ContainerBorder,
	UserAvatar,
	CustomFlexContainer,
	CustomTitle,
	CustomDescription,
	CustomDataDescription,
} from './styles'
import { Container } from '../../utils/Flex/flex.styles'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const AccordionItem = () => {
	const x = true
	const isActive = x ? (
		<MdKeyboardArrowDown size={24} color="#587169" />
	) : (
		<MdKeyboardArrowUp size={24} color="#587169" />
	)
	return (
		<ContainerBorder>
			<Container column>
				<CustomTitle tag="h1">Nome completo</CustomTitle>
				<CustomFlexContainer>
					<CustomFlexContainer>
						<UserAvatar src="/img/brand.svg" />
						<CustomDescription tag="h1">
							Pikachu Soares do Santos Dias
						</CustomDescription>
					</CustomFlexContainer>
					{isActive}
				</CustomFlexContainer>
				<div>
					<CustomTitle tag="h1">Departamento</CustomTitle>
					<CustomDataDescription tag="p">Administrativo</CustomDataDescription>
				</div>
			</Container>
		</ContainerBorder>
	)
}

export default AccordionItem
