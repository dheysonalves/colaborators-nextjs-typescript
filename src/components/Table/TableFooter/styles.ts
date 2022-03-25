import styled from '@emotion/styled'

export const FooterContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: transparent;
	padding: 20px;
`

export const FooterNumber = styled.span`
	font-weight: 600;
	font-size: 16px;
	text-align: center;
	padding-right: 3px;
	color: #587169;
`

export const ButtonContainer = styled.button`
	border: 1px solid #587169;
	background-color: transparent;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	padding: 10px;
	margin: 0 5px;
	cursor: pointer;

	&:hover {
		background-color: lightgray;
	}

	&:disabled {
		border: 1px solid ${(props) => props.theme.light.tertiary.disabled};
		background-color: ${(props) => props.theme.light.tertiary.disabled};
	}
`

export const BackButtonContainer = styled(ButtonContainer)`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
`
