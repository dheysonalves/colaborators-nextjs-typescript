import styled from '@emotion/styled'

export const Container = styled.div<{
	column?: boolean
	flex?: number
}>`
	display: flex;
	flex: ${(props) => (props.flex ? props.flex : 1)};
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
	align-self: center;
`
