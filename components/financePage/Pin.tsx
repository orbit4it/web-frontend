/* eslint-disable react-hooks/exhaustive-deps */
import { showToast } from '@/helper/toaster';
import React, { useEffect, useState } from 'react';
import { BsBackspace } from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
import Modal from '../Modal';
type PinProps = {
  onConfirm: (completePin: string) => void;
  setShow: (isShow: boolean) => void;
};

const Pin: React.FC<PinProps> = ({ setShow, onConfirm }) => {
  const [pin, setPin] = useState<number[]>([]);
  console.log(pin);

  const putPin = (i: number) => {
    if (pin.length < 5) {
      setPin([...pin, i]);
    }
  };

  const handleConfirm = () => {
    if (pin.length === 5) {
      onConfirm(pin.join(''));
    } else {
      showToast('Pin tidak lengkap', 'danger');
    }
  };

  const handleCancel = () => {
    setShow(false);
  };

  const handleShortcut = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      setPin(pin.slice(0, pin.length - 1));
    } else if (/^\d$/.test(e.key)) {
      putPin(parseInt(e.key));
    } else if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleShortcut);
    return () => {
      document.removeEventListener('keydown', handleShortcut);
    };
  }, [pin]);

  return (
    <Modal>
      <div className="w-4/5  flex flex-col gap-5 justify-center items-center z-10">
        <h1 className="text-base font-medium whitespace-nowrap  ">
          Masukan Kode Verifikasi Anda
        </h1>
        <div className="flex gap-2 relative">
          <input
            type="password"
            readOnly
            autoFocus
            className="w-8 h-10 bg-transparent border-b-2 border-white text-3xl font-bold text-center text-white flex gap-2 items-center focus:outline-none "
            value={pin[0] !== undefined ? pin[0] : ''}
          />
          <input
            type="password"
            readOnly
            autoFocus
            className="w-8 h-10 bg-transparent border-b-2 border-white text-3xl font-bold text-center text-white flex gap-2 items-center  focus:outline-none "
            value={pin[1] !== undefined ? pin[1] : ''}
          />
          <input
            type="password"
            readOnly
            autoFocus
            className="w-8 h-10 bg-transparent border-b-2 border-white text-3xl font-bold text-center text-white flex gap-2 items-center  focus:outline-none "
            value={pin[2] !== undefined ? pin[2] : ''}
          />
          <input
            type="password"
            readOnly
            autoFocus
            className="w-8 h-10 bg-transparent border-b-2 border-white text-3xl font-bold text-center text-white flex gap-2 items-center  focus:outline-none "
            value={pin[3] !== undefined ? pin[3] : ''}
          />
          <input
            type="password"
            readOnly
            autoFocus
            className="w-8 h-10 bg-transparent border-b-2 border-white text-3xl font-bold text-center text-white flex gap-2 items-center  focus:outline-none "
            value={pin[4] !== undefined ? pin[4] : ''}
          />
        </div>
        <div className="grid grid-cols-3 justify-items-center justify-center gap-4">
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i}
              className={twMerge(
                i == 9 ? 'col-start-2' : '',
                'px-5 py-3 rounded-md bg-transparent border border-white text-white flex items-center justify-center text-sm font-normal hover:bg-white hover:text-black transition-colors duration-300'
              )}
              onClick={() => {
                putPin(i == 9 ? 0 : i + 1);
              }}
            >
              {i == 9 ? '0' : i + 1}
            </button>
          ))}
          <button
            className="m-auto focus:outline-none"
            onClick={() => {
              setPin(pin.slice(0, pin.length - 1));
            }}
          >
            <BsBackspace className="col-start-3" color="white" size={20} />
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="text-sm font-semibold px-4 py-1 border border-white bg-transparent rounded-xl hover:bg-white hover:text-black transition-colors duration-300 "
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="text-sm font-semibold px-4 py-1 border border-white bg-transparent rounded-xl  hover:bg-white hover:text-black transition-colors duration-300 "
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Pin;
