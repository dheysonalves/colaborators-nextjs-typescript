import React, { useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import {
	FooterContainer,
	FooterNumber,
	ButtonContainer,
	BackButtonContainer,
	FooterRows,
	SpanResults,
	DropdownInputContainer,
} from './styles'
import { DataProps } from '../../../hooks/useTable'
import DropdownInput from '../../DropdownInput/index'

interface TableFooterProps {
	range: number[]
	rowsPerPage: number
	page: number
	slice: DataProps[]
	setPage: (value: string | number) => void
	setRowsPerPage: (value: string | number) => void
	dataLength: number
}

const TableFooter = ({
	page,
	range,
	setPage,
	slice,
	rowsPerPage,
	setRowsPerPage,
	dataLength,
}: TableFooterProps) => {
	useEffect(() => {
		if (slice.length < 1 && page !== 1) {
			setPage(page - 1)
		}
	}, [slice, page, setPage])

	return (
		<FooterContainer>
			<FooterRows>
				<SpanResults>
					Mostrando {rowsPerPage} de {dataLength} registros
				</SpanResults>
				<DropdownInputContainer>
					<DropdownInput
						hasLabel={false}
						data={Array.from({ length: 5 }, (_, i) => ++i * dataLength)}
						value={rowsPerPage.toString()}
						setValue={setRowsPerPage}
					/>
				</DropdownInputContainer>
			</FooterRows>
			<div>
				<BackButtonContainer
					onClick={() => setPage(page === 1 ? 1 : page - 1)}
					disabled={page === 1}
					aria-label="Back button icon"
				>
					<IoIosArrowBack />
				</BackButtonContainer>
				<FooterNumber>
					{page} de {range.length}
				</FooterNumber>
				<ButtonContainer
					onClick={() => setPage(page === range.length ? page : page + 1)}
					disabled={page === range.length}
					aria-label="Forward button icon"
				>
					<IoIosArrowForward />
				</ButtonContainer>
			</div>
		</FooterContainer>
	)
}

export default TableFooter
