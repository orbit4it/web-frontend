import { IoIosArrowForward } from 'react-icons/io';
import { BsTelephone } from 'react-icons/bs';
import UserPageLink from '@/components/admin/UserPageLink';
import styles from '../../../../../helper/page.module.css';

export default function page() {
  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className=" flex items-center gap-2 text-xs md:text-lg font-semibold md:font-bold">
              User
              <span className=" text-[#DFDFDF] font-semibold text-sm">
                <IoIosArrowForward />
              </span>
              <span className=" text-[#DFDFDF] font-semibold text-sm">
                {' '}
                Tambah Anggota
              </span>
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 md:flex-col justify-between items-center gap-6 pb-10 w-full h-full">
        <UserPageLink />
        <div className=" bg-cardDashboard rounded-lg p-3 mt-5 text-sm">
          <form className=" flex gap-7">
            <div className=" relative">
              <label
                htmlFor="foto"
                className=" bg-[#575757] rounded-full w-48 h-48 flex justify-center items-center cursor-pointer "
              >
                <div className=" w-[100px] h-16 rounded-sm border-[1px] border-dashed border-[#828282] bg-transparent text-[#8D8D8D] flex-row items-center justify-center">
                  <p className=" text-lg text-center pt-2">+</p>
                  <p className=" text-sm text-center">Add Photo</p>
                </div>
              </label>
              <input
                type="file"
                className=" absolute -z-10 opacity-0"
                id="foto"
                name="foto"
              />
              <div className=" block mx-auto">
                <button
                  type="submit"
                  className={` bg-[#3240B8] block mx-auto mt-3 rounded-2xl py-1 px-5 text-center text-xs`}
                >
                  Simpan Profile
                </button>
              </div>
            </div>
            <div className=" mt-8">
              <div className="flex text-white items-center">
                <input
                  type="text"
                  placeholder="Nama"
                  className=" text-2xl bg-transparent border-transparent outline-none font-bold placeholder:text-white placeholder:font-bold w-24"
                />
                <div className=" flex items-center">
                  <BsTelephone className=" text-xl" />
                  <input
                    type="number"
                    placeholder="No Telepon"
                    className={`${styles.hiddenInnerButton} placeholder:text-white placeholder:text-sm text-sm text-[#E3E3E3] appearance-none bg-transparent border-transparent outline-none pl-3`}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className=" text-xs bg-transparent border-transparent outline-none font-semibold text-[#DFDFDF] placeholder:text-[#DFDFDF]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="NIS"
                  className=" text-xs bg-transparent border-transparent outline-none font-semibold text-[#DFDFDF] placeholder:text-[#DFDFDF]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Bio"
                  className=" text-xs bg-transparent border-transparent outline-none font-semibold text-green-500 placeholder:text-green-500"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
