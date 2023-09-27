import { useEffect } from 'react';
import { filterUsers } from '../../store/slices/users.slice';
import { MyContentMain } from './MyContentMain/MyContentMain';
import { store } from '../../store/store';
import MyContentHeader from './MyContentHeader/MyContentHeader';
import { useDispatch } from 'react-redux';

const MyContent = () => {
	// async function fetchUsers() {
	// 	const response: UserDTO[] = await GetUserListRequest()

	// 	setUsers(response)
	// }

	// useMemo(() => store.dispatch(fetchUsers()), [store.getState().data])

	// const filters = useSelector((state) => state.users.filters)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(filterUsers())
		console.log(store.getState().users.filtredData)
	}, [store.getState().users.filters]);
	
	return (
		<div>
			<MyContentHeader />
			<MyContentMain />
		</div>
	)
}

export default MyContent