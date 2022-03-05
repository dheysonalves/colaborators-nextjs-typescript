import styled from '@emotion/styled'
import { Container } from '../utils/Flex/flex.styles'
import { Paragraph } from '../Typography/base.index'

export const Wrapper = styled(Container)`
	justify-content: space-between;
	align-items: center;
	padding: 8px 14px;
	border-radius: 8px;
	border: 2px solid #cad6d1;
`
export const NoStyleButton = styled.button`
	background-color: transparent;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
	overflow: hidden;
	outline: none;
	padding-top: 2px;
`

export const CustomParagraph = styled(Paragraph)`
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
`
