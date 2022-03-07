import styled from '@emotion/styled'
import { BaseTypography } from '../../Typography/base.index'

export const ContainerBorder = styled.div`
	border-radius: 8px;
	border: 2px solid #b5f1dd;
	padding: 16px;
`

export const CustomTitle = styled(BaseTypography)`
	color: #587169;
	padding-bottom: 6px;
	font-weight: 600;
	font-size: 12px;
	line-height: 16.8px;
`

export const CustomDescription = styled(CustomTitle)`
	padding-left: 8px;
	padding-bottom: 0px;
	font-weight: 600;
`

export const CustomDataDescription = styled(CustomTitle)`
	padding-bottom: 0px;
	font-weight: 400;
`

export const CustomFlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const UserAvatar = styled.img`
	width: 32px;
	height: 32px;
	border: 4px solid #1dd195;
	border-radius: 80px;
`
