'use client';
import Dropdown, { Option } from '@/components/Dropdown';
import Apicall from '@/helper/apicall';
import { Grade } from '@/helper/interfaces';
import { showToast, updateToast } from '@/helper/toaster';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default function page({ params }: { params: { verify: string } }) {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [grades, setGrades] = useState<Option[]>([]);
  const [selectedGradeId, setSelectedGradeId] = useState<number | string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);
  const router = useRouter();
  const getGrades = async () => {
    const id = toast.loading('Sedang Mengambil Data...');

    const res = await Apicall(
      `
          query {
            grades {
              id
              name
            }
          }
         `,
      false
    );

    if (res.data) {
      const filterByGrade = res.data.grades.filter((grade: Grade) =>
        grade.name?.startsWith('X')
      );

      const manipulateData = filterByGrade.map((grade: Grade) => {
        return {
          value: grade.id,
          label: grade.name,
        };
      });
      setGrades(manipulateData);
      updateToast(id, 'Data Berhasil Diambil', 'success', false, 5000);
    }

    if (res.errors) {
      updateToast(id, 'Gagal Mengambil Data', 'error', false, 5000);
    }
  };

  const createUser = async () => {
    const res = await Apicall(
      `
    mutation {
     createUser(password: "${password}", 
     registrationToken: "${params.verify}",
     gradeId: ${selectedGradeId}
     ) {
        ... on Success {
        message
      }
        ... on Error {
        error
      }
    }
  }`,
      false
    );

    if (!res.data) {
      showToast('Terjadi kesalahan', 'danger');
    }

    if (res.data.createUser.message) {
      showToast(res.data.createUser.message, 'success');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }

    if (res.data.createUser.error) {
      showToast(res.data.createUser.error, 'danger');
    }
  };

  const handleGradeChange = (selectedChange: Option) => {
    setSelectedGradeId(selectedChange.value);
  };

  const handleConfirm = () => {
    if (password !== rePassword) {
      showToast('Password tidak sama', 'danger');
      return;
    }

    createUser();
  };

  useEffect(() => {
    getGrades();
  }, []);

  return (
    <>
      <div
        className={`bg-gradient-to-br from-[#661193] from-[0%] via-[#2F1F89FC] via-[67%] to-[#22185B] to-[100%] h-screen w-screen flex justify-center items-center relative p-5 md:p-0`}
      >
        <div
          className={` relative glassmorphism backdrop-filter backdrop-blur-lg shadow-lg w-auto md:w-[1000px] h-auto rounded-3xl before:rounded-3xl`}
        >
          <div className=" mt-10">
            <h1 className=" text-lg md:text-4xl text-white font-bold text-center mx-16">
              Selamat! Kamu Sudah Menjadi Bagian Dari ORBIT 4 IT Sekarang
            </h1>
          </div>
          <p className=" text-[#C8C8C8] text-center text-sm md:text-lg pt-5">
            Masukan nama kelas mu dan buat password untuk bergabung kedalam web
            comunity kami
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConfirm();
            }}
            action=""
            className=" flex flex-col items-center justify-center gap-5 mt-10 "
          >
            <div className="w-full md:w-auto px-5">
              <Dropdown
                options={grades ? grades : [{ value: 0, label: 'Loading...' }]}
                width="w-full md:w-[400px]"
                onChange={handleGradeChange}
                searchAble={true}
              />
            </div>
            <div className=" w-full md:w-auto px-5 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                title="password"
                placeholder="Account Password"
                className=" outline-none w-full md:w-[400px] bg-[#FDFDFD] bg-opacity-[0.35] rounded-lg p-3 text-white placeholder:text-[#D7D7D7]  text-sm md:text-lg"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {showPassword ? (
                <button
                  className="absolute top-1/2 right-10 transform -translate-y-1/2 cursor-pointer"
                  type="button"
                  onClick={() => setShowPassword(false)}
                >
                  <BsEye size={20} color="white" />
                </button>
              ) : (
                <button
                  className="absolute top-1/2 right-10 transform -translate-y-1/2 cursor-pointer"
                  type="button"
                  onClick={() => setShowPassword(true)}
                >
                  <BsEyeSlash size={20} color="white" />
                </button>
              )}
            </div>
            <div className=" w-full md:w-auto px-5 relative">
              <input
                type={showRePassword ? 'text' : 'password'}
                title="password"
                placeholder="Re-Type Password"
                className=" outline-none w-full md:w-[400px] bg-[#FDFDFD] bg-opacity-[0.35] rounded-lg p-3 text-white placeholder:text-[#D7D7D7] text-sm md:text-lg"
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
              />
              {showRePassword ? (
                <button
                  className="absolute top-1/2 right-10 transform -translate-y-1/2 cursor-pointer"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRePassword(false);
                  }}
                >
                  <BsEye size={20} color="white" />
                </button>
              ) : (
                <button
                  className="absolute top-1/2 right-10 transform -translate-y-1/2 cursor-pointer"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRePassword(true);
                  }}
                >
                  <BsEyeSlash size={20} color="white"></BsEyeSlash>
                </button>
              )}
            </div>
            <div className=" mt-8 md:mt-14 w-full px-5">
              <button
                type="submit"
                title="button"
                className=" block mx-auto border-[1px] border-white rounded-3xl w-full md:w-[300px] p-2 text-center text-white text-sm md:text-lg font-bold mb-16 hover:bg-white hover:text-black transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
