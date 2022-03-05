import React from 'react'
import * as S from './styles'
import { FiSearch } from 'react-icons/fi'

interface BaseInputProps {
	label: string
	placeholderText: string
}

const BaseInput = ({ label, placeholderText }: BaseInputProps) => {
	const [text, updateText] = React.useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		updateText(e.target.value)
	}

	return (
		<S.Wrapper>
			<S.Label htmlFor="input-search">{label}</S.Label>
			<S.IconWrapper>
				<FiSearch size={24} color="#587169" />
				<S.Input
					type="text"
					name="input-search"
					id="input-search"
					aria-label="base-search-input"
					placeholder={placeholderText}
					value={text}
					onChange={(e) => handleChange(e)}
				/>
			</S.IconWrapper>
		</S.Wrapper>
	)
}

export default BaseInput
