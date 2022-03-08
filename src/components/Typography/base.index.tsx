import styled from '@emotion/styled'
import { css } from '@emotion/react'
import DynamicTypography from './index'

export const MainStyle = css`
	font-size: 1.5rem;
`

const BaseTypography = styled(DynamicTypography)`
	${MainStyle};
	color: ${(props) => props.theme.light.neutral.black};
	font-weight: 600;
`

const Paragraph = styled(DynamicTypography)`
	${MainStyle};
	color: ${(props) => props.theme.light.neutral.neutral_5};
	font-weight: 400;
`

export { BaseTypography, Paragraph }
