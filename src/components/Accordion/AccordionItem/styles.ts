import styled from '@emotion/styled'
import { BaseTypography } from '../../Typography/base.index'

export const ContainerBorder = styled.div`
	border-radius: 8px;
	border: 2px solid #b5f1dd;
	padding: 24px 16px;
`

export const Title = styled(BaseTypography)`
	color: #587169;
	padding-bottom: 6px;
	font-weight: 600;
	font-size: 12px;
	line-height: 16.8px;
`

export const UserTitleName = styled(Title)`
	padding-left: 8px;
	padding-bottom: 0px;
	font-weight: 600;
`

export const Description = styled(Title)`
	padding-bottom: 0px;
	font-weight: 400;
`

export const ButtoHeaderContainer = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	outline: none;
	border: none;
	background-color: transparent;
`

export const CustomFlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 2rem;
	grid-column-gap: 1rem;
	margin-top: 20px;
`

export const StatusContainer = styled.div`
	margin-top: 2rem;
`

export const UserAvatar = styled.img`
	width: 32px;
	height: 32px;
	border: 4px solid #1dd195;
	border-radius: 80px;
`
