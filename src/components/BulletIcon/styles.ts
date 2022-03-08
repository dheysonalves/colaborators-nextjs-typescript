import styled from '@emotion/styled'

interface TitleProps {
	isSmall: boolean
}

export const ContainerIcon = styled.div<TitleProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 80px;
	background-color: #cad6d1;
	padding: 10px;
	width: ${(props) => (props.isSmall ? '38px' : '80px')};
	height: ${(props) => (props.isSmall ? '38px' : '80px')};
`
