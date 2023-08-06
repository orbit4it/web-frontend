import Image from 'next/image';

export default function page() {
  const test = [
    {
      nama: 'mas faiz',
      divisi: 'web development',
      score: '1000',
    },
    {
      nama: 'mas udin',
      divisi: 'web development',
      score: '999',
    },
    {
      nama: 'mas jon',
      divisi: 'web development',
      score: '995',
    },
    {
      nama: 'mas ukin',
      divisi: 'web development',
      score: '995',
    },
  ];

  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Leaderboard
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 h-[80vh] max-h-[1800px] flex flex-col   bg-cardDashboard rounded-lg border-2 border-[#AFAFAF] ">
        <div className=" w-full py-4 text-center border-b-2">
          <select
            name="divisi"
            id="divisi"
            title="divisi"
            className="border-none bg-transparent font-semibold text-2xl outline-none relative"
          >
            <option className="bg-darkBlue" value="1">
              Web Dev
            </option>
            <option className="bg-darkBlue" value="2">
              Game Dev
            </option>
            <option className="bg-darkBlue" value="3">
              Cinematography
            </option>
            <option className="bg-darkBlue" value="4">
              IT Support
            </option>
            <option className="bg-darkBlue" value="5">
              Grapich Design
            </option>
          </select>
        </div>

        <div className="flex w-full justify-between px-5 py-2 pr-[41px]">
          <h4 className="font-medium text-base">Ranking</h4>
          <h4 className="font-medium text-base">Score</h4>
        </div>

        <div
          className="overflow-y-scroll
        h-[60vh] bg-white leaderboardScroll
        "
        >
          {test.map((data, key) => {
            return (
              <div className="py-4 flex justify-between items-center pl-11 px-5">
                <div className="flex gap-24 items-center">
                  <h5 className="text-black font-medium text-2xl">5</h5>
                  <Image
                    alt=""
                    width={60}
                    height={60}
                    src="/assets/img/dummyDetailUser.jpg"
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-black  uppercase text-[22px]">
                      {data.nama}
                    </h3>
                    <p className="text-black font-extralight capitalize text-base">
                      {data.divisi}
                    </p>
                  </div>
                </div>
                <h5 className="text-black text-2xl font-medium">
                  {data.score}
                </h5>
              </div>
            );
          })}
        </div>

        <div className="py-4 flex justify-between items-center pl-11  pr-9">
          <div className="flex gap-24 items-center">
            <h5 className="text-white font-medium text-2xl">5</h5>
            <Image
              alt=""
              width={60}
              height={60}
              src="/assets/img/dummyDetailUser.jpg"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-white  uppercase text-[22px]">
                Azarel Lazuardi Aditya
              </h3>
              <p className="text-white font-extralight text-base">
                Web Development
              </p>
            </div>
          </div>
          <h5 className="text-white text-2xl font-medium">993</h5>
        </div>
        {/* <div className="loading ">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div> */}
      </section>
    </>
  );
}
