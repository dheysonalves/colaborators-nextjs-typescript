import React from 'react'
import { AgentStatusTypes } from '../../api/@types/general.types'

import { Pin, StatusText } from './styles'

type StatusPinProps = {
	status: AgentStatusTypes | string
}

const StatusPin = ({ status }: StatusPinProps) => {
	const text = status === 'active' ? 'Ativo' : 'Inativo'
	return (
		<Pin color={status}>
			<StatusText tag="h3">{text}</StatusText>
		</Pin>
	)
}

export default StatusPin
