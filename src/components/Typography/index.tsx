import React from 'react'
import styled from '@emotion/styled'

type TypographyProps = {
	tag: 'h1' | 'h2' | 'h3' | 'p'
	children: JSX.Element
}
const StyledDynamicTypography = styled.div``

const Typography = ({ tag = 'h1', children, ...props }: TypographyProps) => {
	const WithComponent = StyledDynamicTypography.withComponent(tag)

	return <WithComponent {...props}>{children}</WithComponent>
}

export default Typography
