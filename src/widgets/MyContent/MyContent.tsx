import { useEffect } from 'react';
import { MyContentMain } from './MyContentMain/MyContentMain';
import MyContentHeader from './MyContentHeader/MyContentHeader';
import { observer } from 'mobx-react-lite';
import Store from '../../shared/states/Store';

const MyContent = observer(() => {
	// async function fetchUsers() {
	// 	const response: UserDTO[] = await GetUserListRequest()

	// 	setUsers(response)
	// }

	// useMemo(() => store.dispatch(fetchUsers()), [store.getState().data])

	// const filters = useSelector((state) => state.users.filters)

	useEffect(() => {
		Store.fetchUsers()
	}, [Store.getUsers]);
	
	return (
		<div>
			<MyContentHeader />
			<MyContentMain />
		</div>
	)
})

export default MyContent