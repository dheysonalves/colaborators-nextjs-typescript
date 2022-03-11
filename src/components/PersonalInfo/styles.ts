import styled from '@emotion/styled'
import { BaseTypography, Paragraph } from '../Typography/base.index'

export const BorderContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 2px solid ${(props) => props.theme.light.neutral.neutral_1};
	border-radius: 8px;
	padding: 16px;
	background-color: ${(props) => props.theme.light.neutral.neutral_2};
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 8px;
`

export const Title = styled(BaseTypography)`
	color: ${(props) => props.theme.light.neutral.neutral_5};
	font-size: 12px;
	font-weight: 400;
`

export const Subtitle = styled(Paragraph)`
	color: ${(props) => props.theme.light.neutral.neutral_5};
	font-size: 14px;
	font-weight: 600;
`
