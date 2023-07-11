// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import AwanAtas from '@/public/assets/credit/awan_atas.png';
import AwanBawah from '@/public/assets/credit/awan_bawah.png';
import Github from '@/public/assets/credit/github.png';
import Instagram from '@/public/assets/credit/instagram.png';
import Orbit from '@/public/assets/credit/orbit.png';
import Image from 'next/image';

const page = () => {
  const ketua = [
    { nama: 'Hasnat Ferdiananda', github: '@hasnat5_', ig: '@hasnat5_' },
  ];

  const managerial = [
    { nama: 'Luqman Amirullah', github: '@luqmanamirullah', ig: '@hasnat5_' },
    { nama: 'Muhammad Naufal N.', github: '@Vastuolu', ig: 'naufalll.docx' },
    { nama: 'Ghazi Adila Ghifari', github: '@reinaldia', ig: '@irafialdia' },
    { nama: 'Nadya Rahmawati', github: '@nsummet', ig: '@nsummet' },
    { nama: 'Rafi Rizqullah Ramadhan', github: '@rrraf1', ig: '@_urafi' },
  ];

  const content = [
    { nama: 'Ade Riri Fadillah', ig: '@rifadilah_8' },
    { nama: 'Muhammad Fawaz Awwabin', ig: '@muhammfawaz' },
    { nama: 'Muhammad Zaki Athallah', ig: '@muhammad.zaki.a.p.p' },
    { nama: 'Muhammad Raihan', ig: '@ehannzz_' },
    { nama: 'Rafi Rizqullah Ramadhan', ig: '@sasthadriya' },
  ];

  const uiux = [
    { nama: 'Nizar Nashiruddin', ig: '@nezarika', github: '' },
    { nama: 'Raihana Aisha Az-Zahra', ig: '@b4cterya', github: 'raihanaioo' },
    { nama: 'Idnu Fuad Adnani', ig: '@idnufuad', github: '' },
    {
      nama: 'Anugrah Muhammad Arafah',
      ig: '@anuga_arsha',
      github: 'Arsha8Anuga',
    },
    {
      nama: 'Azarel Lazuardi Aditya',
      ig: '@zareladitya',
      github: '',
    },
  ];

  const fe = [
    { nama: 'M Sutan Mico Febrian', ig: '@mico_feb', github: '@mico_feb' },
    {
      nama: 'Rievan Rival Nur Triana',
      ig: '@reyvan_sr_my',
      github: '@ReyvanMacros',
    },
    { nama: 'Hasnat Ferdiananda', ig: '@hasnat5', github: '@hasnat5_' },
    {
      nama: 'Luqman Amirullah',
      ig: '@luqmanamirullah',
      github: '@luqmanamirullah',
    },
    { nama: 'M. Arsal Nawfal Ali', ig: '@raldelrey', github: '@kanaee-cloud' },
    { nama: 'Herlangga Maulani', ig: '@herlanggamaul_', github: '@k0valskia' },
  ];

  const be = [
    { nama: 'Diaz Adriansyah', ig: '@zaid.jsx', github: '@Diaz-Adrianz' },
    {
      nama: 'Najwan Aribena Pratama',
      ig: '@najwanaribena',
      github: '@najwanaribena',
    },
    { nama: 'Muhammad Rafly Pratama', ig: '@rafutaa_', github: '@RFP11' },
    { nama: 'Kamelia Derika Putri', ig: '@kmlsdk_', github: '' },
    {
      nama: 'Melderika Laila Yasmin Fitria',
      ig: '@jes_twtw',
      github: '@lailysmn',
    },
  ];

  return (
    <div>
      <div className="bg-darkPurp">
        <Image src={AwanAtas} alt="Awan Orbit" />
        <div className="mx-auto text-center">
          <Image
            src={Orbit}
            alt="Orbit"
            className="mt-16 lg:mt-0 mb-16 mx-auto"
          />
          <h1 className="font-pStart lg:text-2xl leading-relaxed text-white">
            ORGANIZATION OF BASIC
            <br />
            INFORMATION TECHNOLOGY
          </h1>
        </div>
        <div className="text-white text-center">
          <h1 className="font-bold text-lg mt-14 mb-3 text-center">
            Ketua Pelaksana
            <br /> & Penanggung Jawab
          </h1>
          <ul>
            {ketua.map((orang, index) => (
              <>
                <li key={index}>
                  <h1 className="text-lg mb-3">{orang.nama}</h1>
                  <div className="flex items-center justify-center mb-1 space-x-2">
                    <Image
                      src={Github}
                      alt="Github"
                      className="w-[20px] h-[20px]"
                    />
                    <p className="opacity-50">{orang.github}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      className="w-[20px] h-[20px] bg-cover"
                    />
                    <p className="opacity-50">{orang.ig}</p>
                  </div>
                </li>
              </>
            ))}
          </ul>
          <h1 className="font-bold text-xl mt-10 mb-4 text-center">
            Managerial
          </h1>
          <ul>
            {managerial.map((orang, index) => (
              <>
                <li key={index} className="mb-3">
                  <h1 className="text-lg mb-3">{orang.nama}</h1>
                  <div className="flex items-center justify-center mb-1 space-x-2">
                    <Image
                      src={Github}
                      alt="Github"
                      className="w-[20px] h-[20px]"
                    />
                    <p className="opacity-50">{orang.github}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      className="w-[20px] h-[20px] bg-cover"
                    />
                    <p className="opacity-50">{orang.ig}</p>
                  </div>
                </li>
              </>
            ))}
          </ul>
          <div className="lg:flex justify-between px-2 lg:px-36">
            <div>
              <h1 className="font-bold text-xl mt-10 mb-4 text-center">
                Content
              </h1>
              <ul>
                {content.map((orang, index) => (
                  <>
                    <li key={index} className="mb-3">
                      <h1 className="text-lg mb-3">{orang.nama}</h1>
                      <div className="flex items-center justify-center space-x-2">
                        <Image
                          src={Instagram}
                          alt="Instagram"
                          className="w-[20px] h-[20px] bg-cover"
                        />
                        <p className="opacity-50">{orang.ig}</p>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl mt-10 mb-4 text-center">
                UI/UX
              </h1>
              <ul>
                {uiux.map((orang, index) => (
                  <>
                    <li key={index}>
                      <h1 className="text-lg mb-3">{orang.nama}</h1>
                      {orang.github?.length > 0 ? (
                        <>
                          <div className="flex items-center justify-center mb-1 space-x-2">
                            <Image
                              src={Github}
                              alt="Github"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="opacity-50">{orang.github}</p>
                          </div>
                        </>
                      ) : null}
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <Image
                          src={Instagram}
                          alt="Instagram"
                          className="w-[20px] h-[20px] bg-cover"
                        />
                        <p className="opacity-50">{orang.ig}</p>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:flex justify-between px-2 lg:px-36">
            <div className="lg:w-[270px]">
              <h1 className="font-bold text-xl mt-10 mb-4 text-center">
                Front End
              </h1>
              <ul>
                {fe.map((orang, index) => (
                  <>
                    <li key={index}>
                      <h1 className="text-lg mb-3">{orang.nama}</h1>
                      {orang.github?.length > 0 ? (
                        <>
                          <div className="flex items-center justify-center mb-1 space-x-2">
                            <Image
                              src={Github}
                              alt="Github"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="opacity-50">{orang.github}</p>
                          </div>
                        </>
                      ) : null}
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <Image
                          src={Instagram}
                          alt="Instagram"
                          className="w-[20px] h-[20px] bg-cover"
                        />
                        <p className="opacity-50">{orang.ig}</p>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl mt-10 mb-4 text-center">
                Back End
              </h1>
              <ul>
                {be.map((orang, index) => (
                  <>
                    <li key={index}>
                      <h1 className="text-lg mb-3">{orang.nama}</h1>
                      {orang.github?.length > 0 ? (
                        <>
                          <div className="flex items-center justify-center mb-1 space-x-2">
                            <Image
                              src={Github}
                              alt="Github"
                              className="w-[20px] h-[20px]"
                            />
                            <p className="opacity-50">{orang.github}</p>
                          </div>
                        </>
                      ) : null}
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <Image
                          src={Instagram}
                          alt="Instagram"
                          className="w-[20px] h-[20px] bg-cover"
                        />
                        <p className="opacity-50">{orang.ig}</p>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <Image src={AwanBawah} alt="Awan Orbit" />
        </div>
      </div>
    </div>
  );
};

export default page;
