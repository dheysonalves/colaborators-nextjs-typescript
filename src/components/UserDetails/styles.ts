import styled from '@emotion/styled'
import { theme } from '../../styles/theme/lightTheme'
import DynamicTypography from '../Typography'

export const UserAvatar = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 80px;
	width: 32px;
	height: 32px;
	margin-right: 10px;
	padding: 9px;
	background-color: ${theme.light.primary.green};
	align-self: center;

	@media (max-width: 800px) {
		margin-right: 0px;
	}
`
export const Name = styled(DynamicTypography)`
	line-height: 100%;
	font-size: 14px;
	color: ${theme.light.neutral.black};
	text-transform: uppercase;
	font-weight: 400;
`
