import React from 'react'
import Selecter from '../../../shared/UI/Selecter/Selecter'
import { store } from '../../../store/store'
import { useDispatch } from 'react-redux'
import { clearAllFilters } from '../../../store/slices/users.slice'

const MyContentHeader = () => {

	const dispatch = useDispatch()

	function onClickHandler() {
		dispatch(clearAllFilters())
	}

	return (
		<div>
			<Selecter />
			<div>
				<label>Filter: {store.getState().users.filters.length}</label>
				<button onClick={onClickHandler}>Clear all</button>
			</div>
			<label>Name: {store.getState().users.filters}</label>
		</div>
	)
}

export default MyContentHeader