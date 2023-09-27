import { useEffect } from 'react';
import UserList from '../../../shared/UI/Lists/UserList/UserList';
import { filterUsers } from '../../../store/slices/users.slice';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDTO } from '../../../shared/types/StoreDTO';
import { store } from '../../../store/store';


export const MyContentMain = () => {

	// const filtred = useMemo(() => 
	// 	store.dispatch(actions.filterUsers())
	// 	, [store.getState().filters]
	// );

	const dispatch = useDispatch()
	// const data = useSelector((state: StoreDTO) => state.filtredData)
	// const filters = useSelector((state: StoreDTO) => state.filters)
	
	useEffect(() => {
		dispatch(filterUsers())
		console.log("filtred data:")
		console.log(store.getState().users.filtredData)
	}, [store.getState().users.filters]);
	
	return (
		<div>
			<UserList data={store.getState().users.filtredData} />
		</div>
	);
};
