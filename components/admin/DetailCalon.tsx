'use client';
import React from 'react';
import Modal from '../Modal';
export interface DetailCalonProps {
  classname?: string;
  division: string;
  email: string;
  grade: string;
  name: string;
  nis?: string;
  motivasi: string;
  setShow: (isShow: boolean) => void;
}
const DetailCalon: React.FC<DetailCalonProps> = ({
  division,
  email,
  grade,
  name,
  nis,
  motivasi,
  classname,
  setShow,
}) => {
  const onClose = () => {
    setShow(false);
  };
  return (
    <Modal onClose={onClose}>
      <div className=" w-96 max-h-80 ">
        <h1 className="w-full text-center text-2xl font-semibold">
          Detail Calon Anggota
        </h1>
        <div className="grid grid-cols-12 justify-center justify-items-center mt-10 ">
          <div className="flex flex-col gap-2 col-span-4">
            <h1>Nama</h1>
            <h1>Kelas</h1>
            <h1>NIS</h1>
            <h1>Ingin Masuk</h1>
            <h1>Motivasi</h1>
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <h1>:</h1>
            <h1>:</h1>
            <h1>:</h1>
            <h1>:</h1>
            <h1>:</h1>
          </div>
          <div className="flex flex-col gap-2 col-span-7 ">
            <h1>{name}</h1>
            <h1>{grade}</h1>
            <h1>{nis ? nis : '-'}</h1>
            <h1>{division}</h1>
            <h1>{motivasi ? motivasi : 'tidak ada motivasi'}</h1>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailCalon;
