import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {
	AbsoluteIcon,
	Container,
	Select,
	SelectContainer,
	Option,
} from './styles'

interface DropdownInputProps {
	label?: string
	data: string[] | number[]
	hasLabel?: boolean
	value: string
	setValue: (value: string | number) => void
}

const DropdownInput = ({
	label,
	data,
	hasLabel = true,
	value,
	setValue,
}: DropdownInputProps) => {
	const [dropdownIconState, updateDropdownIconState] = useState(false)
	const ICON_SIZE = 14

	return (
		<Container>
			{hasLabel && <label htmlFor="standart-select">{label}</label>}
			<SelectContainer>
				<Select
					id="standart-select"
					onClick={() => updateDropdownIconState(!dropdownIconState)}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					aria-label="A select for the user"
				>
					{data.map((item, index) => {
						return (
							<Option
								value={item.toString().toLocaleLowerCase()}
								key={index.toString()}
							>
								{item}
							</Option>
						)
					})}
				</Select>
				<AbsoluteIcon>
					{dropdownIconState ? (
						<IoIosArrowUp size={ICON_SIZE} color="#587169" />
					) : (
						<IoIosArrowDown size={ICON_SIZE} color="#587169" />
					)}
				</AbsoluteIcon>
			</SelectContainer>
		</Container>
	)
}

export default DropdownInput
