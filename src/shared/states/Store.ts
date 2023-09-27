import { makeAutoObservable } from "mobx";
import { UserDTO } from "../types/UserDTO";
import { GetUserListRequest } from "../api/GetUserListRequest";

function filterDataByNames(filters: string[], data: UserDTO[]): UserDTO[] {
	const newData: UserDTO[] = data.filter((item) => {
		if (isFilter(item.name, filters)) {
			return item
		}
	})

	return newData
}

function isFilter (item: unknown, filter: unknown[]) {
	if (filter.find(i => i === item) !== undefined) {
		return true
	} else {
		return false
	}
}

class Store {

	private users: UserDTO[] = []
	// filteredUsers: UserDTO[] = []
	private filters: string[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setUsers(data: UserDTO[]) {
		this.users = data
	}

	setFilters(data: string[]) {
		this.filters = data
	}

	async fetchUsers() {
		const response: UserDTO[] = await GetUserListRequest()

		if (response) {
			this.setUsers(response)
		}
	}

	addFilter(filter: string) {
		if (!this.filters.some(f => f === filter)) {
			this.filters.push(filter)
		}
	}

	deleteFilter(name: string) {
		const newFilters: string[] = this.filters.filter(f => {
			if (!isFilter(f, [name])) {
				return f
			}
		})

		this.setFilters(newFilters)
	}

	clearAll() {
		this.setFilters([])
	}

	get filtered() {
		const result: UserDTO[] = filterDataByNames(this.filters, this.users)
		
		return result
	}

	get getUsers() {
		return this.users
	}

	get getFilters() {
		return this.filters
	}
}

export default new Store()