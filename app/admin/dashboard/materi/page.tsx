'use client';

import Modal from '@/components/admin/Modal';
import SubjectCard from '@/components/subjectPage/SubjectCard';
import { IoAdd } from 'react-icons/io5';
import { GrClose } from 'react-icons/gr';
import { BsPlusLg, BsUnion } from 'react-icons/bs';
import { useState } from 'react';
export default function page() {
  const [Deskripsi, setDeskripsi] = useState<string>('');
  const [DeskripsiColor, setDeskripsiColor] = useState<string>('');
  const [showTambah, setShowTambah] = useState(false);

  const handleDeskripsiColor = () => {
    if (Deskripsi.length >= 150 && Deskripsi.length <= 240) {
      setDeskripsiColor('warning');
    } else if (Deskripsi.length > 240) {
      setDeskripsiColor('danger');
    } else {
      setDeskripsiColor('white');
    }
  };


  return (
    <>
    {showTambah && <Modal onClose={() => setShowTambah}>
      <div className=" flex items-center justify-between">
        <h1 className=" font-semibold">Tambah Materi</h1>
      </div>
      <form action="" className=" my-3">
        <div>
          <input
            type="text"
            className=" bg-transparent rounded-lg border-[1px] border-white py-1 px-3 text-white text-lg outline-none placeholder:text-white w-full"
            placeholder="Judul Materi"
          />
        </div>
        <div className=" flex items-center gap-4 mt-3">
          <div>
            <input
              type="text"
              className=" bg-transparent rounded-lg border-[1px] border-white py-1 px-3 text-white text-lg outline-none placeholder:text-white"
              placeholder="Pemateri"
            />
          </div>
          <div>
            <select
              name=""
              id=""
              className=" bg-transparent rounded-lg border-[1px] border-white py-1 px-3 text-white text-lg outline-none placeholder:text-white"
            >
              <option className=" bg-dark-purple" value="">
                Divisi
              </option>
              <option className=" bg-dark-purple" value="Web Development">
                Web Dev
              </option>
              <option className=" bg-dark-purple" value="Game Development">
                Game Dev
              </option>
              <option className=" bg-dark-purple" value="Cinematography">
                Cinematography
              </option>
              <option className=" bg-dark-purple" value="IT Support">
                IT Support
              </option>
              <option className=" bg-dark-purple" value="Design Graphic">
                {' '}
                Design Graphic
              </option>
            </select>
          </div>
        </div>
        <div className='flex items-center gap-3 justify-between mt-5'>
          <div className='flex flex-col gap-3 items-center h-full'>
            <div className='flex items-center bg-transparent rounded-lg border-[1px] border-white py-1 px-3  outline-none'>
                <input 
                  type="file"
                  accept="image/*"
                  id='cover'
                  className="hidden"  
                />
                <label htmlFor="cover" className='flex items-center'>
                <BsPlusLg className='w-4 h-4 text-white mr-3'/>
                <p className='text-lg text-white'>Cover Materi</p>
                </label>
            </div>
            <div className='flex items-center bg-transparent rounded-lg border-[1px] border-white py-1 px-3  outline-none'>
                <input 
                  type="file"
                  accept=".doc, .docx, .pdf"
                  id='attachment'
                  className="hidden"  
                />
                <label htmlFor="attachment" className='flex items-center'>
                <BsPlusLg className='w-4 h-4 text-white mr-3'/>
                <p className='text-lg text-white'>Attachment</p>
                </label>
            </div>
            <div className='flex items-center bg-transparent rounded-lg border-[1px] border-white py-1 px-3  outline-none'>
                <input 
                  type="file"
                  accept=".doc, .docx, .pdf"
                  id='attachment'
                  className="hidden"  
                />
                <label htmlFor="attachment" className='flex items-center'>
                <BsPlusLg className='w-4 h-4 text-white mr-3'/>
                <p className='text-lg text-white'>Latihan Soal</p>
                </label>
            </div>
          </div>

          <div className=" relative">
                <textarea
                  title="Deskripsi"
                  placeholder="Deskripsi Materi"
                  value={Deskripsi}
                  onChange={(e) => {
                    if (e.target.value.length <= 300) {
                      setDeskripsi(e.target.value);
                    }
                    handleDeskripsiColor();
                  }}
                  cols={29}
                  rows={0}
                  style={{overflow: 'hidden'}}
                  className={` ${
                    'border-' + DeskripsiColor
                  } h-[136px] resize-none bg-transparent rounded-lg border-[1px] border-white py-1 px-3  outline-none`}
                />
                <p
                  className={` ${
                    DeskripsiColor == 'white'
                      ? ` text-[#75629A]`
                      : `text-${DeskripsiColor}`
                  }  absolute  text-xs right-3 bottom-4`}
                >
                  {Deskripsi.length}/300
                </p>
              </div>

            {/* <textarea name="" id="" cols={29} rows={0} className='h-[136px] resize-none bg-transparent rounded-lg border-[1px] border-white py-1 px-3  outline-none' style={{overflow: 'hidden'}} placeholder='Deskripsi Materi'></textarea> */}
        </div>
        
        <div className='flex justify-center w-full mt-5'>

        <button className='rounded-lg w-44 py-2 flex items-center justify-center bg-gradient-to-t from-blue-900 to-blue-400 text-white text-lg font-semibold'>
          Upload
        </button>
        </div>
      </form>
    </Modal>
    }
      
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-2xl font-semibold md:font-bold">
              Materi
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className=" w-full">
        <div className=" bg-cardDashboard rounded-lg p-4 my-3 w-full relative">
          <form action="">
            <div className=" flex items-center justify-between">
              <div className=" text-white">
                <button className=" text-[16px] font-semibold bg-[#6222BD]  py-1 px-4 rounded-xl">
                  Latihan Soal
                </button>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className=" bg-transparent rounded-xl text-white text-[16px] py-1 px-4 border-2 border-[#1D885A] outline-none cursor-pointer"
                >
                  <option
                    className=" bg-dark-blue text-white"
                    value="Web Development"
                  >
                    Web Dev
                  </option>
                  <option
                    className=" bg-dark-blue text-white"
                    value="Game Development"
                  >
                    Game Dev
                  </option>
                  <option
                    className=" bg-dark-blue text-white"
                    value="Cinematography"
                  >
                    Cinematography
                  </option>
                  <option
                    className=" bg-dark-blue text-white"
                    value="IT Support"
                  >
                    IT Support
                  </option>
                  <option
                    className=" bg-dark-blue text-white"
                    value="Design Graphic"
                  >
                    Design Graphic
                  </option>
                </select>
              </div>
            </div>
            <div className=" w-full h-auto md:h-64 border-dashed border-white/50 border-2  flex justify-center items-center cursor-pointer my-4 rounded-xl">
              <div className="text-white/50" onClick={()=>setShowTambah(true)}>
                <IoAdd className=" text-4xl mx-10" />
                <p className=" text-[16px] text-center">Tambah Materi</p>
              </div>
            </div>
          </form>
          <div className=" mt-3">
            <SubjectCard
              title="HTML Development Basics"
              speaker="Arief Muhammad"
              createdAt="13.00"
              desc="Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!"
              link="/dashboard/materi/detail"
              textLink="Front-End Essentials & Learning Path"
              cover="/assets/img/learnHTML.png"
              alt="Learn HTML"
            />
            <SubjectCard
              classname=" mt-3"
              title="Front End Learning Path"
              speaker="Arief Muhammad"
              createdAt="13.00"
              desc="Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!"
              link="/dashboard/materi/detail"
              textLink="Front-End Essentials & Learning Path"
              cover="/assets/img/FeTraining.png"
              alt="FE Training"
            />
          </div>
        </div>
      </section>
    </>
  );
}
