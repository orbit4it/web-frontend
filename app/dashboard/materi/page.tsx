import MateriCard from '@/components/dashboard/MateriCard';

export default function page() {
  return (
    <>
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
          <select
            name="divisi"
            id="divisi"
            className="border-2 border-[#43AF94] rounded-2xl bg-transparent py-1 px-4 text-[15px] font-medium outline-none relative right-0 md:left-0"
            title="Divisi"
          >
            <option className=" bg-darkBlue" value="1">
              Web Dev
            </option>
            <option className=" bg-darkBlue" value="2">
              Game Dev
            </option>
            <option className=" bg-darkBlue" value="3">
              Cinematography
            </option>
            <option className=" bg-darkBlue" value="4">
              IT Support
            </option>
            <option className=" bg-darkBlue" value="5">
              Grapich Design
            </option>
          </select>
          <div className=" mt-3">
            <MateriCard
              judul="HTML Development Basics"
              publisher="Arief Muhammad"
              waktu="13.00"
              desc="Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!"
              link="/dashboard/materi/detail"
              textLink="Front-End Essentials & Learning Path"
              img="/assets/img/learnHTML.png"
              alt="Learn HTML"
            />
            <MateriCard
              classname=" mt-3"
              judul="Front End Learning Path"
              publisher="Arief Muhammad"
              waktu="13.00"
              desc="Pada materi kali ini, kita akan belajar basics dari HTML Development. Pelajari materi yang telah diberikan dan kerjakan latihan soal berikut!"
              link="/dashboard/materi/detail"
              textLink="Front-End Essentials & Learning Path"
              img="/assets/img/FeTraining.png"
              alt="FE Training"
            />
          </div>
        </div>
      </section>
    </>
  );
}
