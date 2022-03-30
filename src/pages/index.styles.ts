import styled from '@emotion/styled'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f8faf9;
`

export const Wrapper = styled.div`
	margin: 16px;
`

export const ActionContainer = styled.div<{
	pt?: number
	radius?: number | string
}>`
	background-color: white;
	padding: 16px;
	margin-top: ${(props) => props.pt ?? 0}px;
	border-radius: ${(props) => props.radius ?? 0}px;
	border-bottom: 3px solid #eaefed;
`

export const InputContainer = styled.div`
	border-bottom: 3px solid #eaefed;
`

export const Spacing = styled.div<{
	px?: number
	py?: number
	mx?: number
	my?: number
}>`
	margin: ${(props) => props.my ?? 0}px ${(props) => props.mx ?? 0}px;
	padding: ${(props) => props.py ?? 0}px ${(props) => props.px ?? 0}px;
`
