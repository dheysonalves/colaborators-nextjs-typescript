import styled from '@emotion/styled'
import { BaseTypography } from '../Typography/base.index'

export const Pin = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 80px;
	background-color: ${(props) =>
		props.color === 'active'
			? props.theme.light.feedback.success
			: props.theme.light.tertiary.disabled};
	padding: 4px 8px;
	width: 72px;
	height: 24px;
`

export const StatusText = styled(BaseTypography)`
	font-size: 14px;
	color: ${(props) => props.theme.light.neutral.black};
	font-weight: 500;
	line-height: 16.24px;
`
