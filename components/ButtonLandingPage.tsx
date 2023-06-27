import { ButtonLandingProps } from '@/helper/interfaces';
import Link from 'next/link';
import React from 'react';

const ButtonLandingPage: React.FC<ButtonLandingProps> = ({
	link,
	title,
	textSize,
}) => {
	return (
		<div>
			<Link href={link}>
				<button
					className={` border-purple border-2 py-1 px-4 rounded-full hover:bg-purple font-semibold ${textSize}`}
				>
					{title}
				</button>
			</Link>
		</div>
	);
};

export default ButtonLandingPage;
