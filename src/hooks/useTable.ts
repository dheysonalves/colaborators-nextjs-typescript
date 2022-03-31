import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from '../api/@types/general.types'
import { useState, useEffect } from 'react'

export interface DataProps {
	agent_id: number
	name: string
	image: string
	department: DepartamentRolesTypes | string
	branch: string
	role: NameRolesTypes | string
	status: AgentStatusTypes | string
}

interface CalculateRangeProps {
	data: DataProps[]
	rowsPerPage: number | string
}

interface SliceDataProps {
	data: DataProps[]
	rowsPerPage: number | string
	page: number | string
}

const calculateRange = ({ data, rowsPerPage }: CalculateRangeProps) => {
	const range = []
	const num = Math.ceil(data.length / (rowsPerPage as number))
	for (let i = 1; i <= num; i++) {
		range.push(i)
	}
	return range
}

const sliceData = ({ data, page, rowsPerPage }: SliceDataProps) => {
	return data.slice(
		((page as number) - 1) * (rowsPerPage as number),
		(page as number) * (rowsPerPage as number),
	)
}

const useTable = ({ data, page, rowsPerPage }: SliceDataProps) => {
	const [tableRange, setTableRange] = useState<number[]>([])
	const [slice, setSlice] = useState<DataProps[]>([])

	useEffect(() => {
		const range = calculateRange({ data, rowsPerPage })
		setTableRange([...range] as number[])

		const slice = sliceData({ data, page, rowsPerPage })
		setSlice([...slice] as DataProps[])
	}, [data, setTableRange, page, setSlice, rowsPerPage])

	return { slice, range: tableRange }
}

export default useTable
