import React from 'react';
import UserSignLabel from '../../../Labels/UserSignLabel';
import { UserDTO } from '../../../../types/UserDTO';
import { MdiEarth } from '../../../Icons/MdiEarth';
import { MdiEmail } from '../../../Icons/MdiEmail';
import { MdiPhone } from '../../../Icons/MdiPhone';

interface UserItemProps {
	image?: string;
	user: UserDTO
}

const UserItem: React.FC<UserItemProps> = ({image, user}) => {

	const {address, company, email, id, name, phone, username, website} = user

	return (
		<div>
			<img src={image} alt={name} />
			<label>{name}</label>
			<label>{username}</label>
			<div>
				<UserSignLabel icon={<MdiEmail />} text={email}/>
				<UserSignLabel icon={<MdiEarth />} text={website}/>
				<UserSignLabel icon={<MdiPhone />} text={phone}/>
			</div>
		</div>
	)
}

export default UserItem