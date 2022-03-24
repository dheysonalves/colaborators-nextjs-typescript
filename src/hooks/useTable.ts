import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from '../api/@types/general.types'
import { useState, useEffect } from 'react'

export interface DataProps {
	id: number
	name: string
	image: string
	department: DepartamentRolesTypes
	branch: string
	role: NameRolesTypes
	status: AgentStatusTypes
}

interface CalculateRangeProps {
	data: DataProps[]
	rowsPerPage: number
}

interface SliceDataProps {
	data: DataProps[]
	rowsPerPage: number
	page: number
}

const calculateRange = ({ data, rowsPerPage }: CalculateRangeProps) => {
	const range = []
	const num = Math.ceil(data.length / rowsPerPage)
	// const i = 1
	for (let i = 1; i <= num; i++) {
		range.push(i)
	}
	return range
}

const sliceData = ({ data, page, rowsPerPage }: SliceDataProps) => {
	return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
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
