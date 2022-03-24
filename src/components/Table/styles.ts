import styled from '@emotion/styled'

export const TableContainer = styled.table`
	border-collapse: collapse;
	border: none;
	width: 100%;
`

export const ThreadContainer = styled.thead`
	background-color: transparent;
	border: 1px solid #cad6d1;
`

export const ThreadHeader = styled.th`
	padding: 12px;
	font-weight: 600;
	font-size: 1.2rem;
	color: ${(props) => props.theme.light.neutral.neutral_5};
	text-align: left;

	:first-of-type {
		border-top-left-radius: 8px;
	}

	:last-of-type {
		border-top-right-radius: 8px;
	}
`

export const TableCell = styled.td`
	text-align: left;
	padding: 25px 12px;
	font-size: 1.2rem;
	font-weight: 400;
	color: ${(props) => props.theme.light.neutral.neutral_5};
	border-bottom: 1px solid ${(props) => props.theme.light.tertiary.disabled};
`
export const ImageCell = styled.img`
	width: 32px;
	height: 32px;
	object-fit: cover;
	border-radius: 50%;
`

export const NameImageWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const NameSpan = styled.span`
	font-weight: 600;
	padding-left: 10px;
`
