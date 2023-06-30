import { BsSearch, BsBell } from 'react-icons/bs';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="md:ml-[20%]">
        <header className="w-full h-16 md:h-20 mb-4 px-5 py-2 md:px-10 md:py-4 flex items-center gap-5 ">
          <ul className="relative w-full flex gap-10 justify-end">
            <li className="w-5 h-5 relative">
              <BsSearch
                size={18}
                color="white"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </li>
            <li className="w-5 h-5 relative ">
              <div className="w-1 h-1 rounded-full bg-[#FA5555] absolute top-0 right-0"></div>
              <BsBell
                size={18}
                color="white"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </li>
            <li className="absolute left-0 my-auto md:static w-5 h-5 rounded-full bg-slate-400"></li>
          </ul>
        </header>
        <main className="bg-[#1C2039] pl-16 md:pl-14 pr-5 md:pr-10 text-white ">
          {children}
        </main>
      </section>
    </>
  );
}
