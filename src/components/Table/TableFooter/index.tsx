import React, { useEffect } from 'react'
import {
	FooterContainer,
	FooterNumber,
	ButtonContainer,
	BackButtonContainer,
} from './styles'
import { DataProps } from '../../../hooks/useTable'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface TableFooterProps {
	range: number[]
	setPage: (value: number) => void
	page: number
	slice: DataProps[]
}

const TableFooter = ({ page, range, setPage, slice }: TableFooterProps) => {
	useEffect(() => {
		if (slice.length < 1 && page !== 1) {
			setPage(page - 1)
		}
	}, [slice, page, setPage])

	return (
		<FooterContainer>
			<BackButtonContainer
				onClick={() => setPage(page === 1 ? 1 : page - 1)}
				disabled={page === 1}
			>
				<IoIosArrowBack />
			</BackButtonContainer>
			<FooterNumber>
				{page} de {range.length}
			</FooterNumber>
			<ButtonContainer
				onClick={() => setPage(page === range.length ? page : page + 1)}
				disabled={page === range.length}
			>
				<IoIosArrowForward />
			</ButtonContainer>
		</FooterContainer>
	)
}

export default TableFooter
