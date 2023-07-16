'use client';
import Rating from '@/components/dashboard/Rating';
import { useState } from 'react';

interface StarRateType {
  label: string;
  rate: number;
}

export default function page() {
  const [isPresent, setIsPresent] = useState<boolean | null>(null);
  const [token, setToken] = useState<string>();
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>();
  const [notPresent, setNotPresent] = useState<string>();
  const [isValid, setIsValid] = useState<boolean>();
  const [isSuccess, setIsSuccess] = useState<boolean>();

  const Send = () => {
    const Message = {
      Hadir: isPresent,
      NoToken: token,
      Rate: rating,
    };
    setIsValid(true);
    setIsSuccess(true);
  };

  const checkInput = () => {
    if (isPresent == null || token == undefined || rating == null) {
      setIsValid(false);
      return null;
    } else {
      Send();
    }
  };

  const SendNotPresent = () => {
    const Message2 = {
      TidakHadir: !isPresent,
      Alasan: notPresent,
    };
    setIsValid(true);
    setIsSuccess(true);
  };

  const checkInput2 = () => {
    if (!isPresent == null || notPresent == undefined) {
      setIsValid(false);
      return null;
    } else {
      SendNotPresent();
    }
  };

  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold pb-4">
              Absensi
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section>
        <div className="lg:flex">
          <div className="lg:w-[471px] h-[504px] bg-d-secondary p-8 lg:mr-5 rounded-[15px]">
            <h1>Keterangan</h1>
            {isValid != undefined && !isValid && (
              <div className="text-[#FF3131]">
                Mohon lengkapi data kehadiran!
              </div>
            )}
            {isValid && (
              <div className="text-[#54FFC1]">Data kehadiran terkirim!</div>
            )}
            <div className="flex pt-5 radio-group">
              <div className="mr-10 p-0">
                <label htmlFor="Present" className="radio">
                  <input
                    id="Present"
                    type="radio"
                    name="attendance"
                    value="hadir"
                    className={`${isPresent ? '' : ''} `}
                    onClick={() => setIsPresent(true)}
                  />
                  Hadir
                  <span className="relative -top-[19px]"></span>
                </label>
              </div>
              <div>
                <label htmlFor="NotPresent" className="radio">
                  <input
                    id="NotPresent"
                    type="radio"
                    name="attendance"
                    value="tidak hadir"
                    className={`${!isPresent ? '' : ''} `}
                    onClick={() => setIsPresent(false)}
                  />
                  Tidak Hadir
                  <div className="relative -top-[19px]"></div>
                </label>
              </div>
            </div>
            {/*Kalo Hadir tampilin ini */}

            {isPresent && (
              <div className="pt-10 mr-5 ml-5">
                <div className="relative z-0">
                  <input
                    type="text"
                    id="floating_standard"
                    //value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    No Token
                  </label>
                </div>
              </div>
            )}

            {/*Kalo Ga Hadir tampilin ini*/}

            {!isPresent && (
              <>
                <div className="mb-6 relative top-5">
                  <h1 className="mb-2">Alasan tidak masuk</h1>
                  <label
                    htmlFor="large-input"
                    className="block absolute bottom-0 right-0 mb-2 text-sm font-inter text-white mr-2"
                  ></label>
                  <textarea
                    id="large-input"
                    className="block w-full h-[127px] p-4 text-white border border-gray-300 rounded-[15px] bg-[#262B49] sm:text-md"
                    maxLength={100}
                    onChange={(e) => setNotPresent(e.target.value)}
                  />
                </div>

                <div className="flex mt-16 mx-auto justify-center">
                  <button
                    type="button"
                    className="w-[152px] h-[32px] relative top-28 text-center text-white bg-[#6E64DD] hover:bg-[#3e3883] font-medium rounded-[5px] text-sm px-5 mr-2 focus:outline-none"
                    onClick={() => checkInput2()}
                  >
                    Submit
                  </button>
                </div>
              </>
            )}

            {isPresent && (
              <div className="flex">
                <div className="mx-auto relative top-40">
                  <h4 className="text-center text-[18px]">
                    Gimana eskul hari ini?
                  </h4>
                  <p className="text-center text-[12px] mt-2">
                    Coba rate pengalaman kamu!
                  </p>
                  <Rating
                    count={5}
                    value={rating}
                    edit={true}
                    onChange={(value) => setRating(value)}
                    className="flex ml-4 mt-4"
                  />
                </div>
              </div>
            )}
          </div>

          {isPresent && (
            <div className="lg:w-[575px] h-[504px] p-8 relative top-10 lg:static bg-[#262B49] rounded-[15px]">
              <div>
                <h1 className="text-[14px] text-center">
                  Tuliskan kesan kalian buat eskul hari ini juga ya!
                </h1>
                <div className="mb-6 relative top-5">
                  <label
                    htmlFor="large-input"
                    className="block absolute bottom-0 right-0 mb-2 text-sm font-inter text-white mr-2"
                  >
                    {feedback ? feedback.length : 0}/100
                  </label>
                  <textarea
                    id="large-input"
                    className="block w-full h-[127px] p-4 text-white border border-gray-300 rounded-[15px] bg-[#262B49] sm:text-md"
                    maxLength={100}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
                <h1 className="text-[14px] text-center relative top-5">
                  Buat materi selanjutnya, mau belajar apa nih?
                </h1>
                <div className="mb-6 relative top-10">
                  <label
                    htmlFor="large-input"
                    className="block absolute bottom-0 right-0 mb-2 text-sm font-inter text-white mr-2"
                  >
                    {feedback ? feedback.length : 0}/100
                  </label>
                  <textarea
                    id="large-input"
                    className="block w-full h-[127px] p-4 text-white border border-gray-300 rounded-[15px] bg-[#262B49] sm:text-md"
                    maxLength={100}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex mt-16 mx-auto justify-center">
                <button
                  type="button"
                  className="w-[152px] h-[32px] text-center text-white bg-[#6E64DD] hover:bg-[#3e3883] font-medium rounded-[5px] text-sm px-5 mr-2 focus:outline-none"
                  onClick={() => checkInput()}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
