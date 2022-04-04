import { useState, useCallback } from 'react'

export default function useTextInput(initialValue = '') {
	const [text, setInput] = useState(initialValue)

	const updateText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setInput(e.target.value)
	}, [])

	return { text, updateText }
}
