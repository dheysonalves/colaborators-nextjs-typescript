import { useState, useEffect } from 'react'

interface CalculateRangeProps {
	data: []
	rowsPerPage: number
}

interface SliceDataProps {
	data: []
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
	const [tableRange, setTableRange] = useState([])
	const [slice, setSlice] = useState([])

	useEffect(() => {
		const range = calculateRange({ data, rowsPerPage })
		setTableRange([...range] as [])

		const slice = sliceData({ data, page, rowsPerPage })
		setSlice([...slice])
	}, [data, setTableRange, page, setSlice, rowsPerPage])

	return { slice, range: tableRange }
}

export default useTable
