import styled from '@emotion/styled'
import { Container } from '../utils/Flex/flex.styles'
import { theme } from '../../styles/theme/lightTheme'

export const Wrapper = styled(Container)`
	border: 1px solid ${theme.light.tertiary.disabled};
	justify-content: space-between;
	align-items: center;
`
export const RightBorder = styled.div`
	border-right: 1px solid ${theme.light.tertiary.disabled};
	padding: 5px 10px 5px 10px;

	@media (max-width: 1199px) {
		flex: 1;
		text-align: center;
		border-right: none;
		padding: 0px;
	}
`

export const LeftBorder = styled.div`
	border-left: 1px solid ${theme.light.tertiary.disabled};
	padding: 5px 10px 5px 10px;
	@media (max-width: 1199px) {
		flex: 0;
		border-left: none;
		padding: 0px;
	}
`
