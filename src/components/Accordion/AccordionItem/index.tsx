import React, { useState } from 'react'
import {
	ContainerBorder,
	UserAvatar,
	CustomFlexContainer,
	Title,
	UserTitleName,
	Description,
	ButtoHeaderContainer,
	GridContainer,
} from './styles'
import { Container } from '../../utils/Flex/flex.styles'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import StatusPin from '../../StatusPin'
import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from '../../../api/@types/general.types'

export interface IAccordionItemProps {
	data: {
		agent_id: number
		name: string
		image: string
		department: DepartamentRolesTypes
		branch: string
		role: NameRolesTypes
		status: AgentStatusTypes
	}
}

const AccordionItem = ({ data }: IAccordionItemProps) => {
	const [toogle, setToogle] = useState(false)

	return (
		<ContainerBorder>
			<Container column>
				<Title tag="h1">Nome Completo</Title>
				<ButtoHeaderContainer
					onClick={() => setToogle(!toogle)}
					aria-label="button-toogle"
				>
					<CustomFlexContainer>
						<UserAvatar src={data.image ?? '/img/brand.svg'} />
						<UserTitleName tag="h1">{data.name}</UserTitleName>
					</CustomFlexContainer>
					{toogle ? (
						<MdKeyboardArrowDown size={24} color="#587169" />
					) : (
						<MdKeyboardArrowUp size={24} color="#587169" />
					)}
				</ButtoHeaderContainer>
				{toogle && (
					<GridContainer>
						<div>
							<Title tag="h1">Departamento</Title>
							<Description tag="p">{data.department}</Description>
						</div>
						<div>
							<Title tag="h1">Cargo</Title>
							<Description tag="p">{data.role}</Description>
						</div>
						<div>
							<Title tag="h1">Unidade</Title>
							<Description tag="p">{data.branch}</Description>
						</div>
						<div>
							<Title tag="h1">Status</Title>
							<StatusPin status={data.status} />
						</div>
					</GridContainer>
				)}
			</Container>
		</ContainerBorder>
	)
}

export default AccordionItem
