import React from 'react'

import { Wrapper, NoStyleButton, CustomParagraph } from './styles'
import { BiDotsVerticalRounded } from 'react-icons/bi'

interface SheetInputProps {
	title: string
	callback?: () => unknown
	styles?: React.CSSProperties
}

const SheetInput = ({ title, callback, styles }: SheetInputProps) => {
	return (
		<Wrapper style={styles}>
			<CustomParagraph tag="h1">{title}</CustomParagraph>
			<NoStyleButton onClick={callback} aria-label="icon-button">
				<BiDotsVerticalRounded size={24} color="#587169" />
			</NoStyleButton>
		</Wrapper>
	)
}
export default SheetInput
