export default function page() {
  return (
    <>
      {/* Route Section */}
      <section>
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Profile
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section>
        <div className="w-[1000px] h-[1153px] bg-[#262B49] p-8 rounded-[15px]">
          <div className="w-[192px] h-[192px] bg-[#D9D9D9] rounded-full">

          </div>
        </div>
      </section>
    </>
  );
}
