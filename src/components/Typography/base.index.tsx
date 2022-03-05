import styled from '@emotion/styled'
import { css } from '@emotion/react'

import DynamicTypography from './index'

export const MainStyle = css`
	font-size: 1rem;
	line-height: 1.92;
`

const BaseTypography = styled(DynamicTypography)`
	${MainStyle};
`

export default BaseTypography
