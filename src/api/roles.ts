import { NameRolesTypes, DepartamentRolesTypes } from './@types/general.types'
import HttpInstance from './config/HttpCustomInstance'

interface IRolesResponse {
	roles: {
		name: NameRolesTypes
		departament: DepartamentRolesTypes
		agents_quantity: number
	}[]
}

interface IGroupRules {
	role: string
	permitions: ['read', 'write', 'delete']
}

interface IRolePermissionResponse {
	roles: {
		name: NameRolesTypes
		departament: DepartamentRolesTypes
		grouprules: IGroupRules
	}
}

const getAllRoles = async () => {
	try {
		const data = HttpInstance.get<IRolesResponse>('/roles')

		return data
	} catch (error) {
		console.log(error)
	}
}

const getRolePermission = async (id: string) => {
	try {
		const data = HttpInstance.get<IRolePermissionResponse>(`/roles/${id}`)

		return data
	} catch (error) {
		console.log(error)
	}
}

export { getAllRoles, getRolePermission }
