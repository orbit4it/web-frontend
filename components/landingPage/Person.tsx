import { StrukturProps } from '@/helper/interfaces'
import Image from 'next/image'
import React from 'react'


const Person: React.FC<StrukturProps> = (props) => {
    return (
        <div className='grid justify-center w-fit h-full'>
            <div className='relative grid items-end'>
                <div
                    className='h-full w-full z-10 absolute'
                    style={{
                        borderRadius: '0px 0px 15px 15px',
                        background: 'linear-gradient(180deg, rgba(35, 1, 61, 0.00) 67.99%, rgba(107, 29, 204, 0.50) 99.98%, rgba(116, 33, 221, 0.78) 99.99%, rgba(0, 0, 0, 0.30) 100%)'
                    }}>
                </div>
                <Image
                    // src={'/assets/img/strukturOrganisasi/Hasnat.png'}
                    src={props.image}
                    width={500}
                    height={500}
                    className='w-40 h-auto'
                    alt="elite"
                    priority
                />
                <h3 className='font-bold text-4xl text-white text-center w-40 absolute mx-auto left-0 right-0 -bottom-6 z-20'>{props.name}</h3>
            </div>

            <p className='text-xl text-white/20 text-center mt-6 w-40'>{props.jabatan}</p>
        </div>
    )
}

export default Person