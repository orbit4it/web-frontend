import React from 'react';
import Image from 'next/image';
import { VisiMisiProps } from '@/helper/interfaces';
import { twMerge } from 'tailwind-merge';

const VisiMisiCard: React.FC<VisiMisiProps> = ({
	classname,
	img,
	alt,
	imgWidth,
	imgHeight,
	imgClassname,
	judul,
	desc,
}) => {
	return (
		<div className=" w-auto h-auto md:w-[380px] md:h-[180px] text-white">
			<Image
				src={img}
				width={imgWidth}
				height={imgHeight}
				alt={alt}
				className={twMerge(`block mx-auto`, imgClassname)}
			/>

			<fieldset className=" border-[1px] border-white border-opacity-20 rounded-3x w-96 h-[180px] rounded-[26px] mt-5">
				<legend className=" px-5 block mx-auto font-bold text-4xl">
					{judul}
				</legend>
				<p className="text-[16px] py-2 px-4">{desc}</p>
			</fieldset>
		</div>
	);
};

export default VisiMisiCard;
