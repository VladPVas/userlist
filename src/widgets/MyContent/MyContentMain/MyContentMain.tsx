import { useMemo } from 'react';
import UserList from '../../../shared/UI/Lists/UserList/UserList';
import Store from '../../../shared/states/Store';
import { observer } from 'mobx-react-lite';


export const MyContentMain = observer(() => {
	const users = useMemo(() => Store.filtered, [Store.getFilters])
		
	return (
		<div>
			<UserList data={users} />
		</div>
	);
});
