import React from 'react';
import Image from 'next/image';
import { VisiMisiProps } from '@/helper/interfaces';
import { twMerge } from 'tailwind-merge';
import { motion as m } from 'framer-motion';

const VisiMisiCard: React.FC<VisiMisiProps> = ({
	classname,
	img,
	alt,
	imgWidth,
	imgHeight,
	imgClassname,
	judul,
	desc,
	misi,
}) => {
	return (
		<div className=" w-auto mx-auto h-auto md:w-[380px] md:h-[180px] text-white">
			<m.div
				initial={{ opacity: 0, translateY: 5 }}
				whileInView={{ opacity: 1, translateY: -20 }}
				className=""
			>
				<Image
					src={img}
					width={imgWidth}
					height={imgHeight}
					alt={alt}
					className={twMerge(`block mx-auto`, imgClassname)}
				/>
			</m.div>

			{misi ? (
				<fieldset className=" border-[1px] border-white border-opacity-20 w-auto md:w-96 h-auto md:h-[180px] rounded-[30px] mt-0 md:mt-5 p-2 md:p-0">
					<legend className=" px-5 block mx-auto font-bold text-4xl">
						{judul}
					</legend>
					<div className="flex items-center gap-3 pl-5">
						<h1 className=" text-4xl">1</h1>
						<p>
							Meningkatkan komunikasi baik antara anggota aktif dengan alumni
						</p>
					</div>
					<div className="flex items-center gap-3 mt-3 pl-5">
						<h1 className=" text-4xl">2</h1>
						<p>Menciptakan lingkungan yang nyaman, efektif, dan efisien</p>
					</div>
				</fieldset>
			) : (
				<fieldset className=" border-[1px] border-white border-opacity-20 w-auto md:w-96 h-auto md:h-[180px] rounded-[30px] mt-0 md:mt-5 p-2 md:p-0">
					<legend className=" px-5 block mx-auto font-bold text-4xl">
						{judul}
					</legend>
					<p className=" text-sm md:text-[16px] py-2 px-4">{desc}</p>
				</fieldset>
			)}
		</div>
	);
};

export default VisiMisiCard;
