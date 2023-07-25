export default function page() {
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
      <section className="mt-4 h-[70vh] max-h-[1800px] flex flex-col justify-center items-center">
        <div className="loading ">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </section>
    </>
  );
}
