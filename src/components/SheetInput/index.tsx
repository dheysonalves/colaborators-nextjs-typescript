import React from 'react'

import { Wrapper, NoStyleButton, CustomParagraph } from './styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'

interface SheetInputProps {
	title: string
	callback?: () => unknown
}

const SheetInput = ({ title, callback }: SheetInputProps) => {
	return (
		<Wrapper>
			<CustomParagraph tag="h1">{title}</CustomParagraph>
			<NoStyleButton onClick={callback}>
				<BiDotsVerticalRounded size={24} color="#587169" />
			</NoStyleButton>
		</Wrapper>
	)
}
export default SheetInput
