import {
	AgentStatusTypes,
	DepartamentRolesTypes,
	NameRolesTypes,
} from './@types/general.types'
import HttpInstance from './config/HttpCustomInstance'

export interface IAgentsResponse {
	items: {
		agent_id: number
		name: string
		image: string
		department: DepartamentRolesTypes
		branch: string
		role: NameRolesTypes
		status: AgentStatusTypes
	}[]
}

interface IAgentDetails {
	agent: {
		id: number
		name: string
		email: string
		phone: {
			ddd: string
			ddi: string
			number: string
		}
		document: {
			type: string
			number: string
		}
		birth_date: string
		image: string
		department: DepartamentRolesTypes
		branch: string
		role: NameRolesTypes
		status: AgentStatusTypes
	}
}

const getAllAgents = async () => {
	try {
		const data = HttpInstance.get<IAgentsResponse>('/agents')

		return data
	} catch (error) {
		console.log(error)
	}
}

const getAgentDetail = async (id: string) => {
	try {
		const data = HttpInstance.get<IAgentDetails>(`/agent/${id}`)

		return data
	} catch (error) {
		console.log(error)
	}
}

export { getAllAgents, getAgentDetail }
