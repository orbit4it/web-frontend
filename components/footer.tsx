import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TfiEmail } from 'react-icons/tfi';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const divisons = [
		{
			name: 'Web Development',
		},
		{
			name: 'Game Development',
		},
		{
			name: 'Cinematography',
		},
		{
			name: 'Graphic Design',
		},
		{
			name: 'IT Support',
		},
	];
	return (
		<div className=" block md:flex items-center justify-between bg-purpleFooter bg-opacity-70 p-10">
			<div className=" flex items-center justify-center md:justify-normal gap-6">
				<div className=" flex items-center text-white gap-2">
					<div className=" bg-purple  rounded-full p-1">
						<AiOutlineInstagram className=" text-lg" />
					</div>
					<Link href={'https://www.instagram.com/orbit4it/'} target="blank">
						<p className=" text-xs font-light">@orbit4it</p>
					</Link>
				</div>
				<div className=" flex items-center text-white gap-2">
					<div className=" bg-purple  rounded-full p-1">
						<TfiEmail className=" text-lg" />
					</div>
					<Link href={'mailto:orbit4it@gmail.com'} target="blank">
						<p className=" text-xs font-light">orbit4it@gmail.com</p>
					</Link>
				</div>
			</div>
			<div className=" flex md:block flex-col items-center justify-center mt-3 md:mt-0">
				<div className=" flex items-center">
					<Image
						src={'/assets/logo/LogoPrimary.png'}
						width={68}
						height={68}
						alt="ORBIT"
					/>
					<Image
						src={'/assets/img/smkn4.png'}
						width={76}
						height={78}
						alt="SMKN 4 Bandung"
					/>
				</div>
				<p className=" text-xs font-bold text-white pt-2">
					SMK Negeri 4 Bandung
				</p>
			</div>

			{/* UNTUK DEKSTOP  */}
			<div className=" mt-4 md:mt-0 hidden md:block ">
				{divisons.map((data, key) => {
					return (
						<p key={key} className=" text-xs font-bold text-white">
							{data.name}
						</p>
					);
				})}
				<Link href={'/credit'}>
					<h1 className=" text-white text-xl font-bold mt-2">Crew Developer</h1>
				</Link>
			</div>
			{/* UNTUK DEKSTOP END */}

			{/* UNTUK MOBILE  */}
			<div className=" text-white mt-3 block md:hidden">
				<p className=" text-xs font-bold text-center">
					Web Development Game Development Cinematography Graphic Design IT
					Support
				</p>
				<Link href={'/credit'}>
					<h1 className=" text-white text-xl font-bold mt-2 text-center pt-2">
						Crew Developer
					</h1>
				</Link>
			</div>
			{/* UNTUK MOBILE END */}
		</div>
	);
};

export default Footer;