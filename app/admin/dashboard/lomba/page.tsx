export default function page() {
  return (
    <>
      {/* Route Section */}
      <section className="pl-10 md:p-0">
        <ul className="flex gap-4 items-center route">
          <li>
            <h1 className="text-xs md:text-lg font-semibold md:font-bold">
              Menjemen Lomba
            </h1>
          </li>
        </ul>
      </section>
      {/* Another Content */}
      <section className="mt-4 md:flex justify-between gap-6 pb-10"></section>
    </>
  );
}
