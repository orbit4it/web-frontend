'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ButtonLandingPage from '@/components/ButtonLandingPage';
import { motion as m } from 'framer-motion';
import Awan from '@/components/Awan';
import styles from '../helper/page.module.css';
import CardLanding from '@/components/CardLanding';

export default function Home() {
	return (
		<div className="relative bg-purpleFooter overflow-x-hidden">
			<Navbar />

			{/* Greetings  */}
			<div
				className=" bg-home bg-[length:150%_100%] md:bg-[length:100%_100%] h-screen"
				id="beranda"
			>
				<div className="  h-screen text-white flex flex-col items-center justify-center">
					<div className=" flex flex-col justify-center items-center">
						<m.div className=" mt-0 md:mt-24">
							{/* UNTUK SELAIN MOBILE  */}
							<svg
								width="311"
								height="75"
								viewBox="0 0 311 75"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className=" hidden md:block"
							>
								<path
									fillRule="evenodd"
									clip-rule="evenodd"
									d="M225.25 0.833984H240.75V74.6961H225.25V0.833984ZM39.25 0.833984C60.6917 0.833984 78 17.3791 78 37.765C78 58.151 60.6917 74.6961 39.25 74.6961C17.86 74.6961 0.5 58.151 0.5 37.765C0.5 17.3791 17.86 0.833984 39.25 0.833984ZM39.25 15.6064C52.115 15.6064 62.5 25.5532 62.5 37.765C62.5 50.0261 52.115 59.9237 39.25 59.9237C26.4367 59.9237 16 50.0261 16 37.765C16 25.5532 26.4367 15.6064 39.25 15.6064ZM85.75 0.833984H124.5C137.365 0.833984 147.75 10.7807 147.75 22.9926C147.75 32.0038 142.17 39.7347 134.058 43.1816L147.75 74.6961H131.01L118.145 45.1512H101.25V74.6961H85.75V45.1512V30.3788H101.25H124.5C128.788 30.3788 132.25 27.0796 132.25 22.9926C132.25 18.9056 128.788 15.6064 124.5 15.6064C111.583 15.6064 98.6667 15.6064 85.75 15.6064V0.833984ZM155.5 0.833984H194.25C207.115 0.833984 217.5 10.7807 217.5 22.9926C217.5 28.6554 215.278 33.875 211.61 37.765C215.278 41.7043 217.5 46.8747 217.5 52.5374C217.5 64.7985 207.115 74.6961 194.25 74.6961H171H155.5V59.9237V45.1512V30.3788H171H194.25C198.538 30.3788 202 27.0796 202 22.9926C202 18.9056 198.538 15.6064 194.25 15.6064C181.333 15.6064 168.417 15.6064 155.5 15.6064V0.833984ZM194.25 59.9237C198.538 59.9237 202 56.6245 202 52.5374C202 48.4504 198.538 45.1512 194.25 45.1512H171V59.9237H194.25ZM271.75 0.833984H287.25H295C303.577 0.833984 310.5 7.43233 310.5 15.6064H287.25V74.6961H271.75V15.6064H248.5V0.833984H271.75ZM302.75 59.9237C298.513 59.9237 295 63.2228 295 67.3099C295 71.3969 298.513 74.6961 302.75 74.6961C307.038 74.6961 310.5 71.3969 310.5 67.3099C310.5 63.2228 307.038 59.9237 302.75 59.9237Z"
									fill="white"
								/>
							</svg>
							{/* UNTUK SELAIN MOBILE END */}

							{/* UNTUK MOBILE  */}
							<svg
								width="200"
								height="75"
								viewBox="0 0 311 75"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className=" block md:hidden"
							>
								<path
									fillRule="evenodd"
									clip-rule="evenodd"
									d="M225.25 0.833984H240.75V74.6961H225.25V0.833984ZM39.25 0.833984C60.6917 0.833984 78 17.3791 78 37.765C78 58.151 60.6917 74.6961 39.25 74.6961C17.86 74.6961 0.5 58.151 0.5 37.765C0.5 17.3791 17.86 0.833984 39.25 0.833984ZM39.25 15.6064C52.115 15.6064 62.5 25.5532 62.5 37.765C62.5 50.0261 52.115 59.9237 39.25 59.9237C26.4367 59.9237 16 50.0261 16 37.765C16 25.5532 26.4367 15.6064 39.25 15.6064ZM85.75 0.833984H124.5C137.365 0.833984 147.75 10.7807 147.75 22.9926C147.75 32.0038 142.17 39.7347 134.058 43.1816L147.75 74.6961H131.01L118.145 45.1512H101.25V74.6961H85.75V45.1512V30.3788H101.25H124.5C128.788 30.3788 132.25 27.0796 132.25 22.9926C132.25 18.9056 128.788 15.6064 124.5 15.6064C111.583 15.6064 98.6667 15.6064 85.75 15.6064V0.833984ZM155.5 0.833984H194.25C207.115 0.833984 217.5 10.7807 217.5 22.9926C217.5 28.6554 215.278 33.875 211.61 37.765C215.278 41.7043 217.5 46.8747 217.5 52.5374C217.5 64.7985 207.115 74.6961 194.25 74.6961H171H155.5V59.9237V45.1512V30.3788H171H194.25C198.538 30.3788 202 27.0796 202 22.9926C202 18.9056 198.538 15.6064 194.25 15.6064C181.333 15.6064 168.417 15.6064 155.5 15.6064V0.833984ZM194.25 59.9237C198.538 59.9237 202 56.6245 202 52.5374C202 48.4504 198.538 45.1512 194.25 45.1512H171V59.9237H194.25ZM271.75 0.833984H287.25H295C303.577 0.833984 310.5 7.43233 310.5 15.6064H287.25V74.6961H271.75V15.6064H248.5V0.833984H271.75ZM302.75 59.9237C298.513 59.9237 295 63.2228 295 67.3099C295 71.3969 298.513 74.6961 302.75 74.6961C307.038 74.6961 310.5 71.3969 310.5 67.3099C310.5 63.2228 307.038 59.9237 302.75 59.9237Z"
									fill="white"
								/>
							</svg>
							{/* UNTUK MOBILE END */}
						</m.div>
						<m.h1 className=" py-3 md:py-8 text-center px-1">
							Organization of Basic Information Technology
						</m.h1>
						<m.h1
							initial={{ opacity: 0, translateY: 100 }}
							whileInView={{ opacity: 1, translateY: -5 }}
							className=" text-xl md:text-2xl text-center pb-8"
						>
							Mari Belajar IT Bersama Kami Sekarang Juga!
						</m.h1>
						<ButtonLandingPage
							link="/login"
							title="Mulai"
							textSize="text-lg"
							animate={true}
							viewportOnce={false}
						/>
					</div>
				</div>
			</div>
			{/* Greetings  END*/}

			{/* APA ITU ORBIT */}
			<div className=" bg-home2 bg-[length:150%_100%] md:bg-[length:100%_100%] h-screen relative p-5 md:p-0">
				<div className=" pt-1  md:pt-10">
					<m.div
						initial={{ opacity: 0, translateY: 100 }}
						whileInView={{ opacity: 1, translateY: -5 }}
						className="  w-auto md:w-[618px]"
					>
						<CardLanding
							width=""
							height="h-56 "
							judul="Apa itu ORBIT?"
							desc="Orbit merupakan sebuah ekstrakurikuler yang fokus bergerak di bidang
							IT. Orbit merupakan sebuah wadah yang menampung 	siswa yang ingin
							mengembangkan bakatnya, terutama dalam IT, siapapun bisa masuk orbit
							tanpa melihat jurusannya."
							classname=" mt-0 md:mt-40 ml-0 md:ml-36"
							judulClassname=" pt-2"
							descClassname=""
						/>
					</m.div>
				</div>
				<m.div
					initial={{ opacity: 0, translateY: 100 }}
					whileInView={{ opacity: 1, translateY: -5 }}
					className=" pt-5 relative md:absolute z-10 md:right-10  w-auto md:w-[492px]"
				>
					<CardLanding
						width=""
						height="h-[286px] "
						judul="Apa saja kegiatan yang dilakukan ORBIT?"
						desc="Orbit bersifat sebagai sarana siswa untuk mengembangkan dan mengasah bakat mereka. Para siswa dapat memilih untuk bergabung beragam divisi orbit, dimana mereka akan belajar bersama mentor, mengulas materi bersama teman, dan mengerjakan latihan soal/projek yang telah diberikan."
						classname=" mt-2 md:mt-9"
						judulClassname=" text-right pt-2"
						descClassname=""
					/>
				</m.div>
			</div>

			<div className=" bg-home3 bg-[length:150%_100%] md:bg-[length:100%_100%] h-screen relative">
				<m.div
					initial={{ opacity: 0, translateY: 5 }}
					whileInView={{ opacity: 1, translateY: -20 }}
					className=" absolute bottom-0"
				>
					<Awan classname=" bottom-0 " />
				</m.div>

				<m.div
					initial={{ opacity: 0, translateY: 100 }}
					whileInView={{ opacity: 1, translateY: -5 }}
					className=" absolute bottom-0 "
				>
					<Awan classname=" -bottom-20" />
				</m.div>
			</div>
			{/* APA ITU ORBIT  END*/}

			{/* ABOUT  */}
			<div
				className=" bg-about h-screen w-full bg-[length:150%_100%] md:bg-[length:100%_100%]"
				id="tentang"
			></div>
			{/* ABOUT END */}

			<Footer />
		</div>
	);
}
