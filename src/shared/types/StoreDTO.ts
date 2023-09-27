import { UserDTO } from "./UserDTO";

export interface StoreDTO {
	data: UserDTO[],
	filtredData: UserDTO[],
	filters: string[]
}