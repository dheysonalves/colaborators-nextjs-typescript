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
	StatusContainer,
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
		department: DepartamentRolesTypes | string
		branch: string
		role: NameRolesTypes | string
		status: AgentStatusTypes | string
	}
}

const AccordionItem = ({ data }: IAccordionItemProps) => {
	const [toogle, setToogle] = useState(false)

	return (
		<ContainerBorder isActive={data.status === 'active'}>
			<Container column>
				<Title tag="h1">Nome Completo</Title>
				<ButtoHeaderContainer
					onClick={() => setToogle(!toogle)}
					aria-label="button-toogle"
				>
					<CustomFlexContainer>
						<UserAvatar
							src={data.image ?? '/img/brand.svg'}
							alt="User accordion image"
						/>
						<UserTitleName tag="h1">{data.name}</UserTitleName>
					</CustomFlexContainer>
					{toogle ? (
						<MdKeyboardArrowDown size={24} color="#587169" />
					) : (
						<MdKeyboardArrowUp size={24} color="#587169" />
					)}
				</ButtoHeaderContainer>
				{toogle && (
					<>
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
						</GridContainer>
						<StatusContainer>
							<Title tag="h1">Status</Title>
							<StatusPin status={data.status} />
						</StatusContainer>
					</>
				)}
			</Container>
		</ContainerBorder>
	)
}

export default AccordionItem
