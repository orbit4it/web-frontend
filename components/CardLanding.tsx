import React from 'react';
import styles from '../helper/page.module.css';
import { CardLandingProps } from '@/helper/interfaces';
import { twMerge } from 'tailwind-merge';

const CardLanding: React.FC<CardLandingProps> = ({
	width,
	height,
	judul,
	desc,
	classname,
}) => {
	return (
		<div
			className={twMerge(
				`${styles.cardLanding} w-auto md:${width} h-auto md:${height} rounded-[36px] border-[1px] text-white p-5`,
				classname
			)}
		>
			<h1 className=" text-3xl font-bold">{judul}</h1>
			<p className=" opacity-60 text-[16px] font-normal text-justify pt-4">
				{desc}
			</p>
		</div>
	);
};

export default CardLanding;
