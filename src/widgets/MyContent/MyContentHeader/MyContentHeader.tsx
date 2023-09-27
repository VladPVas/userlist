import { observer } from 'mobx-react-lite'
import Selecter from '../../../shared/UI/Selecter/Selecter'
import Store from '../../../shared/states/Store'

const MyContentHeader = observer(() => {

	function onClickHandler() {
		// dispatch(clearAllFilters())
		Store.clearAll()
	}

	return (
		<div>
			<Selecter />
			<div>
				<label>Filter: {Store.getFilters.length}</label>
				<button onClick={onClickHandler}>Clear all</button>
			</div>
			<label>Name: {Store.getFilters}</label>
		</div>
	)
})

export default MyContentHeader