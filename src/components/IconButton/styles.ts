import styled from '@emotion/styled'
import { BaseTypography } from '../Typography/base.index'

export const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	background-color: transparent;
	border: 2px solid ${(props) => props.theme.light.primary.green};
	width: 100%;
	padding: 16px;
	border-radius: 8px;
`

export const Title = styled(BaseTypography)`
	font-size: 16px;
	font-weight: 600;
	margin-left: 5px;
	color: ${(props) => props.theme.light.neutral.black};
`
