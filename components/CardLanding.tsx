import React from 'react';
import styles from '../helper/page.module.css';
import { CardLandingProps } from '@/helper/interfaces';
import { twMerge } from 'tailwind-merge';

const CardLanding: React.FC<CardLandingProps> = ({
	judul,
	desc,
	classname,
	judulClassname,
	descClassname,
}) => {
	return (
		<div
			className={twMerge(
				`${styles.cardLanding} rounded-[36px] border-[1px] text-white p-5`,
				classname
			)}
		>
			<h1 className={twMerge(`text-3xl font-bold`, judulClassname)}>{judul}</h1>
			<p
				className={twMerge(
					`opacity-60 text-[16px] font-normal text-justify pt-4`,
					descClassname
				)}
			>
				{desc}
			</p>
		</div>
	);
};

export default CardLanding;
