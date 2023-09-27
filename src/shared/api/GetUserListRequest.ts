import { UserDTO } from "../types/UserDTO";

export async function GetUserListRequest() {
	const response: UserDTO[] = await fetch("https://jsonplaceholder.typicode.com/users")
																		.then(r => { return r.json() })

	return response as UserDTO[]
}