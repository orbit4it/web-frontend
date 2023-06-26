// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { NavLink, NavbarProps } from '@/helper/interfaces';
// import ButtonLandingPage from './ButtonLandingPage';

// const Navbar: React.FC<NavbarProps> = ({ beranda, tentang, divisi, masuk }) => {
// 	const navLinks: NavLink[] = [
// 		{
// 			name: 'beranda',
// 			link: beranda || '/#beranda',
// 			title: 'Beranda',
// 		},
// 		{
// 			name: 'tentang',
// 			link: tentang || '/#tentang',
// 			title: 'Tentang',
// 		},
// 		{
// 			name: 'divisi',
// 			link: divisi || '/#divisi',
// 			title: 'Divisi',
// 		},
// 	];

// 	return (
// 		<div className="flex items-center justify-between fixed top-0 w-screen px-36 pt-4 bg-transparent scroll-smooth">
// 			<Image
// 				src="/assets/logo/LogoPrimary.png"
// 				width={68}
// 				height={68}
// 				alt="ORBIT"
// 			/>
// 			<ul className="flex items-center gap-14 text-white text-[13px]">
// 				{navLinks.map((navLink, index) => (
// 					<li
// 						key={index}
// 						// className=" py-3 px-5 rounded-md hover:font-bold bg-gradient-to-b from-transparent via-[#FFFFFF] via-[125%] to-[#D9D9D9] to-[0%]"
// 					>
// 						<Link href={navLink.link}>
// 							<p>{navLink.title}</p>
// 						</Link>
// 					</li>
// 				))}
// 				<ButtonLandingPage link="/" title="Masuk" />
// 			</ul>
// 		</div>
// 	);
// };

// export default Navbar;

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLandingPage from './ButtonLandingPage';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
	const [active, setActive] = useState<boolean>(false);

	const navLinks = [
		{
			name: 'beranda',
			link: '/#beranda',
			title: 'Beranda',
		},
		{
			name: 'tentang',
			link: '/#tentang',
			title: 'Tentang',
		},
		{
			name: 'divisi',
			link: '/#divisi',
			title: 'Divisi',
		},
	];

	return (
		<div className=" flex items-center justify-between fixed top-0 w-screen px-5 md:px-36 pt-4 bg-transparent scroll-smooth">
			<Image
				src="/assets/logo/LogoPrimary.png"
				width={68}
				height={68}
				alt="ORBIT"
			/>
			<ul className=" hidden md:flex items-center gap-14 text-white text-[13px] ">
				{navLinks.map((navLink, index) => (
					<li
						key={index}
						// className=" py-3 px-5 rounded-md hover:font-bold bg-gradient-to-b from-transparent via-[#FFFFFF] via-[125%] to-[#D9D9D9] to-[0%]"
					>
						<Link href={navLink.link}>
							<p>{navLink.title}</p>
						</Link>
					</li>
				))}
				<ButtonLandingPage link="/" title="Masuk" />
			</ul>
			<div
				className={`block md:hidden text-2xl text-white ${
					active ? 'hidden' : 'block'
				}`}
			>
				<RxHamburgerMenu
					onClick={(e) => {
						setActive(!active);
					}}
				/>
			</div>
			<div
				className={`block md:hidden text-2xl text-white ${
					active ? 'block' : 'hidden'
				}`}
			>
				<IoMdClose
					onClick={(e) => {
						setActive(!active);
					}}
				/>
			</div>
		</div>
	);
}
