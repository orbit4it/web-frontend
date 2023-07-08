import { SwiperStyles, TestimoniProps } from '@/helper/interfaces';
import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';


const TestimoniData = [
    {
        image: 'https://media.licdn.com/dms/image/D5603AQHIFs1CkC4q-A/profile-displayphoto-shrink_800_800/0/1666520712370?e=1694044800&v=beta&t=yttXhLViykx2zEfdz1GnLYFhStJg7xfyvv_QRULasAs',
        message: '“ORBIT tuh punya aura magis tersendiri, makanya gak aneh kalau talenta terbaik Opat selalu lahir dari sini. Sukses tuh perpaduan preparation ketemu sama opportunity, pokoknya ga boleh pernah puas deh buat upgrade terus diri kamu di sisi akademik, projek, lomba, dan organisasi (ekskul), the sky is the limit.”',
        name: 'RAFKA IMANDA PUTRA',
        honor: 'Juara 1 TSDN 2022',
    },
    {
        image: 'https://media.licdn.com/dms/image/C5603AQEX_cE7L2myrA/profile-displayphoto-shrink_800_800/0/1584553974257?e=1692230400&v=beta&t=E9Vvx9skJvTX0C4kdOskFonVnDk45JJq7p2_KTnc7Nw',
        message: '“"Bergabung dalam ORBIT dapat memfasilitasi pengembangan keahlian IT dan kompetensi personal siswa. Ini merupakan organisasi yang ideal untuk menumbuhkan keterampilan kritis, memperluas jaringan profesional, dan mempersiapkan siswa menghadapi tantangan industri modern."”',
        name: 'MUHAMMAD AGY NURWICAKSONO',
        honor: 'Juara 1 Web Design Competition Universitas Widyatama 2018, founded Booster Indonesia',
    },
    {
        image: 'https://media.licdn.com/dms/image/C5103AQFptugPULYTKA/profile-displayphoto-shrink_800_800/0/1586521922233?e=1694044800&v=beta&t=Jfnx1a6qLQaur8AURI4x1Z2tA3-kCQhD3oZHbcW5teo',
        message: '“Follows instructions well, but has a tendency to be too literal, and can be lost unless there are firm guidelines. Or sometimes may not take sufficient care to check the instructions before starting. Follows instructions well, but has a tendency to be too literal, and can be lost unless there are firm guidelines.”',
        name: 'ELANG FAJAR BUANA',
        honor: 'Juara 1 TSDN 2022',
    },
    {
        image: '/assets/img/feedback/ganesh.png',
        message: '“Saya mengikuti ekskul Organization of Basic Information & Technology atau yang akrab disebut sebagai ORBIT. Dari sinilah saya mendapatkan berbagai macam wawasan dan insight baru. Pematerinya pun kakak kelas atau alumni yang memiliki berbagai teknik mengajar yang fun dan menarik sehingga menambah kenyamanan suasana belajar. Pokoknya, ORBIT tuh tempat yang tepat deh buat yang ingin belajar santai bareng tapi tetap nyerap ke otak.”',
        name: 'I Gede Krisna Ganesha Widhiarta',
        honor: 'Juara 3 LKS bidang Cyber Security',
    },
    {
        image: '/assets/img/feedback/emirsyah.png',
        message: '“Orbit menyenangkan, banyak belajar hal baru dan ketemu banyak temen-temen yang punya passion di bidang sama. Semoga kedepannya orbit bisa terus berinovasi.”',
        name: 'Muhammad Emirsyah',
        honor: 'Juara 2 Mage ITS',
    },


]

export const ElementTestimoni: React.FC<TestimoniProps> = (props) => {
    return (
        <div
            style={{
                background: 'linear-gradient(144deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
                backdropFilter: 'blur(15px)'
            }}
            className='rounded-5xl border border-solid border-white px-12 py-16 grid justify-center h-fit'>
            <div className='grid md:flex gap-8 justify-items-center content-center md:max-w-screen-md'>
                <Image
                    className='rounded-full w-32 h-32 md:w-48 md:h-48'
                    src={props.image}
                    alt="Image"
                    width={500}
                    height={500}
                    priority
                />
                <div className='grid items-start content-start gap-8'>
                    <p className='text-white/50 '>{props.message}</p>
                    <div>
                        <h4 className='text-xl font-medium text-white'>{props.name}</h4>
                        <h5 className='text-sm text-gray1'>{props.honor}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CardTestimoni = () => {
    const swiperStyles: SwiperStyles = {
        '--swiper-pagination-color': '#EE2ED1',
        '--swiper-pagination-bullet-inactive-color': '#757575',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-width': '10px',
        '--swiper-pagination-bullet-height': '10px',
    };
    return (
        <Swiper
            className='mySwiper w-full'
            style={swiperStyles}
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
        >
            {TestimoniData.map((data, key) => {
                return (
                    <SwiperSlide key={key} style={{ display: 'grid', alignItems: 'center' }} ><ElementTestimoni image={data.image} name={data.name} honor={data.honor} message={data.message} /></SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default CardTestimoni