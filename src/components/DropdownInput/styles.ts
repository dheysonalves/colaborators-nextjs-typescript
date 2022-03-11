import styled from '@emotion/styled'

export const Container = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.light.neutral.neutral_2};
	border: 2px solid ${(props) => props.theme.light.neutral.neutral_1};
	border-radius: 8px;

	label {
		position: absolute;
		top: -10px;
		left: 10px;
		background-color: ${(props) => props.theme.light.neutral.neutral_2};
		color: ${(props) => props.theme.light.neutral.neutral_3};
		padding: 0 1em;
		font-size: 14px;
	}
`

export const SelectContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Select = styled.select`
	width: 100%;
	border-radius: 8px;
	padding: 1.5em 1em;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	line-height: 1.1;
	color: ${(props) => props.theme.light.neutral.neutral_5};
	background-color: ${(props) => props.theme.light.neutral.neutral_2};
`

export const Option = styled.option`
	font-size: 16px;
	font-weight: 500;
	color: ${(props) => props.theme.light.neutral.neutral_5};
`

export const AbsoluteIcon = styled.div`
	position: absolute;
	right: 0;
	margin-right: 2em;
`
