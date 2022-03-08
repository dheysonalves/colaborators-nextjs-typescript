import styled from '@emotion/styled'
import { Container } from '../utils/Flex/flex.styles'

export const Wrapper = styled.div`
	position: relative;
	padding: 8px 14px;
	border-radius: 8px;
	border: 2px solid #cad6d1;
	background-color: #fff;

	label {
		position: absolute;
		top: -11px;
		left: 20px;
		background-color: white;
		padding: 0px 3px;
	}

	input {
		border: none;
		-webkit-appearance: none;
		outline: none;
		width: 100%;
	}
`
export const IconWrapper = styled(Container)`
	margin-top: 5px;
	align-items: center;
`

export const Label = styled.label`
	color: #a3b8b0;
	font-size: 14px;
	font-weight: 500;
`

export const Input = styled.input`
	color: #587169;
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	margin-left: 8px;
`
