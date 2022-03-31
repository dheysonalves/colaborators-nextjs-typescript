import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

import useTable from '../../hooks/useTable'
import TableFooter from './TableFooter'
import { DataProps } from '../../hooks/useTable'

import {
	TableContainer,
	ThreadContainer,
	ThreadHeader,
	TableCell,
	ImageCell,
	NameImageWrapper,
	NameSpan,
} from './styles'
import StatusPin from '../StatusPin/index'

interface TableProps {
	data: DataProps[]
}

const Table = ({ data }: TableProps) => {
	const [page, setPage] = useState<string | number>(1)
	const [rowsPerPage, setRowsPerPage] = useState<string | number>(data.length)
	const { range, slice } = useTable({ data, page, rowsPerPage })

	return (
		<>
			<TableContainer>
				<ThreadContainer>
					<tr>
						<ThreadHeader>Nome Completo</ThreadHeader>
						<ThreadHeader>Departamento</ThreadHeader>
						<ThreadHeader>Cargo</ThreadHeader>
						<ThreadHeader>Unidade</ThreadHeader>
						<ThreadHeader>Status</ThreadHeader>
					</tr>
				</ThreadContainer>
				<tbody>
					{slice.map((item) => (
						<tr key={item.agent_id}>
							<TableCell>
								<NameImageWrapper>
									<ImageCell src={item.image} />
									<NameSpan>{item.name}</NameSpan>
								</NameImageWrapper>
							</TableCell>
							<TableCell>{item.department}</TableCell>
							<TableCell>{item.role}</TableCell>
							<TableCell>{item.branch}</TableCell>
							<TableCell>
								<StatusPin status={item.status} />
							</TableCell>
							<TableCell>
								<BsThreeDotsVertical size={24} color="#587169" />
							</TableCell>
						</tr>
					))}
				</tbody>
			</TableContainer>
			<TableFooter
				range={range}
				slice={slice}
				setPage={setPage}
				page={page as number}
				rowsPerPage={rowsPerPage as number}
				setRowsPerPage={setRowsPerPage}
				dataLength={data.length}
			/>
		</>
	)
}

export default Table
