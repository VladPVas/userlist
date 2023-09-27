import React, { ReactNode } from 'react';

interface UserSignLabelProps {
	icon: ReactNode;
	text: string;
}



const UserSignLabel: React.FC<UserSignLabelProps> = ({icon, text}) => {
	return (
		<div>
			{icon}
			<label>
				{text}
			</label>
		</div>
	)
}

export default UserSignLabel