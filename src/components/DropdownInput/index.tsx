import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {
	AbsoluteIcon,
	Container,
	Select,
	SelectContainer,
	Option,
} from './styles'

interface DropdownInputProps {
	label: string
}

const DropdownInput = ({ label }: DropdownInputProps) => {
	const [dropdownIconState, updateDropdownIconState] = React.useState(false)
	const ICON_SIZE = 14

	return (
		<Container>
			<label htmlFor="standart-select">{label}</label>
			<SelectContainer>
				<Select
					id="standart-select"
					onClick={() => updateDropdownIconState(!dropdownIconState)}
				>
					<Option value="option 1">Comercial</Option>
					<Option value="option 2">Option 2</Option>
					<Option value="option 3">Option 3</Option>
					<Option value="option 4">Option 4</Option>
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
