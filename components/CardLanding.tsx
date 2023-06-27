import React from 'react';
import styles from '../helper/page.module.css';
import { CardLandingProps } from '@/helper/interfaces';

const CardLanding: React.FC<CardLandingProps> = ({
	width,
	height,
	judul,
	desc,
}) => {
	return (
		<div
			className={` ${styles.cardLanding} w-auto md:${width} h-auto md:${height} rounded-3xl border-[1px] text-white p-5`}
		>
			<h1 className=" text-3xl font-bold">{judul}</h1>
			<p className=" opacity-60 text-[16px] font-normal text-justify pt-4">
				{desc}
			</p>
		</div>
	);
};

export default CardLanding;
