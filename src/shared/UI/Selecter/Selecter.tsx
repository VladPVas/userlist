import { observer } from "mobx-react-lite"
import React from "react"
import Store from "../../states/Store"

const Selecter = observer(() => {

	function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
		if (e.currentTarget.ariaChecked === 'true') {
			// store.dispatch(addFilter(e.currentTarget.value))
			Store.addFilter(e.currentTarget.value)
		} else if (e.currentTarget.ariaChecked === 'false') {
			// store.dispatch(deleteFilterByName(e.currentTarget.value))
			Store.deleteFilter(e.currentTarget.value)
		}
	}

	return (
		<form>
			<select
				id="names" 
				multiple 
				size={4} 
				onChange={e => onChangeHandler(e)} 
			>
				{Store.getUsers.map(item => {
					return (
						<option value={item.name} >
							<input type="checkbox"/>
							{item.name}
						</option>
					)
				})}
			</select>
		</form>
	)
})

export default Selecter