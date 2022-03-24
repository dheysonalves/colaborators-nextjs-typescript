import React, { useEffect } from 'react'
import { FooterContainer } from './styles'
import { DataProps } from '../../../hooks/useTable'

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
			{range.map((el, index) => (
				<button key={index} onClick={() => setPage(el)}>
					{el}
				</button>
			))}
		</FooterContainer>
	)
}

export default TableFooter
