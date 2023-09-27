import React from "react"
import { store } from "../../../store/store"
import { addFilter, deleteFilterByName } from "../../../store/slices/users.slice"
import { useSelector } from "react-redux"

const Selecter = () => {

	function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
		if (e.currentTarget.ariaChecked === 'true') {
			store.dispatch(addFilter(e.currentTarget.value))
		} else if (e.currentTarget.ariaChecked === 'false') {
			store.dispatch(deleteFilterByName(e.currentTarget.value))
		}
	}

	const data = useSelector(state => state)
	
	console.log(data)

	return (
		<form>
			<input 
				type="checkbox" 
				list="names" 
			/>
			<select
				id="names" 
				multiple 
				size={4} 
				onChange={e => onChangeHandler(e)} 
			>
				{store.getState().users.data.map(item => {
					return (
						<option value={item.name} >{item.name}</option>
					)
				})}
			</select>
		</form>
	)
}

export default Selecter