import React from 'react';
import UserItem from './UserItem/UserItem';
import { UserDTO } from '../../../types/UserDTO';

interface UserListProps {
	data: UserDTO[];
}

const UserList: React.FC<UserListProps> = ({data}) => {
	
	return (
		<div>
			{data.map(user => {
				return <UserItem user={user}/>
			})}
		</div>
	)
}

export default UserList