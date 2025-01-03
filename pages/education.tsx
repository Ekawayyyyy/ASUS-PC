// // pages/education.tsx
// import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar';
// import React, { ReactNode } from 'react';
// import Particle from '@/components/Particle';

// interface ExperienceItemProps {
//   year: string;
//   title: string;
//   location: string;
//   description: ReactNode;
//   isLeft: boolean;
// }

// const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, location, description, isLeft }) => (
//   <div className={`relative flex flex-col items-${isLeft ? 'start' : 'end'} w-full my-8 md:flex-row md:items-center`}>
//     {/* Card */}
//     <div className={`bg-white mx-4 md:mx-12 p-6 rounded-lg shadow-lg w-full md:w-5/12 ${isLeft ? 'md:ml-auto' : 'md:mr-auto'} `}>
//       <h3 className="text-xl font-bold text-black">{title}</h3>
//       <span className="text-sm text-gray-800">{location}</span>
//       <span className="text-sm ml-0 md:ml-16 text-gray-400">{year}</span>
//       <p className="text-black mt-2">{description}</p>
//     </div>
//     {/* Year and circle */}
//     <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#875300] rounded-full border-4 border-gray-500"></div>
//   </div>
// );

// const Timeline: React.FC = () => {
//   const experiences = [
//     {
//       year: '2019-2024',
//       title: 'UIN Alauddin Makassar',
//       location: 'S1 - Sistem Informasi',
//       description: (
//         <ul className='list-disc ml-6'>
//           <li>Penerima Beasiswa Bank Indonesia Provinsi Sulawesi Selatan Periode 2021-2023</li>
//           <li>Masuk 7 Besar pada Perlombaan Bisnis Plan Competition tingkat nasional pada Universitas Banyuwangi tahun 2022</li>
//           <li>Menjabat sebagai Direktur Manajemen Sumberdaya Manusia (MSDM) pada Komunitas Penerima Beasiswa Bank Indonesia (GenBI) periode 2022-2023</li>
//           <li>Menjabat sebagai Koordinator Divisi Komunikasi dan Informasi (Kominfo) pada Himpunan Mahasiswa Jurusan (HMJ) Sistem Informasi periode 2021-2022</li>
//         </ul>
//       ),
//       isLeft: true,
//     },
//     {
//       year: '2016 - 2019',
//       title: 'SMK Penerbangan Techno Terapan Makassar',
//       location: 'Farmasi',
//       description: 'Ketua Pramuka Putri di SMA Penerbangan Techno Terapan Makassar periode 2017-2018',
//       isLeft: false,
//     },
//     {
//       year: '2013 - 2016',
//       title: 'SMP NEG 09 Marusu',
//       location: 'B',
//       description: 'Juara 1 Paduan Suara pada Kegiatan 17 Agustus tahun 2016 tingkat se-Kecamatan Marusu',
//       isLeft: true,
//     },
//   ];

//   return (
//     <>
//       <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
//         <Particle />
//         <Navbar />
//         <div className="bg-gray-900 text-gray-200 pt-12">
//           <h2 className="relative z-10 text-black text-3xl font-bold text-center mb-12">My Education</h2>
//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute w-1 bg-[#875300] left-1/2 transform -translate-x-1/2 h-full mb-0"></div>
//             {experiences.map((exp, index) => (
//               <ExperienceItem 
//                 key={index} 
//                 year={exp.year} 
//                 title={exp.title} 
//                 location={exp.location} 
//                 description={exp.description} 
//                 isLeft={exp.isLeft}
//               />
//             ))}
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Timeline;
// pages/OrganizationalExperience.tsx
// pages/OrganizationalExperience.tsx

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Particle from '../components/Particle';

const experiences = [
  {
    title: 'Direktur MSDM GenBI Komisariat UIN Alauddin Makassar',
    description: 'Mei 2022 - Mei 2023',
    imageUrl: '/images/genbi2.JPG', // Ganti dengan path gambar yang sesuai
    width: 400, // Lebar gambar
    height: 300, // Tinggi gambar
  },
  {
    title: 'Koordinator Deputi Public Relation GenBI Komisariat UIN Alauddin Makassar',
    description: 'Mei 2021 - Mei 2022',
    imageUrl: '/images/genbi1.JPG', // Ganti dengan path gambar yang sesuai
    width: 400,
    height: 300,
  },
  {
    title: 'Koordinator Divis Kominfo HMJ Sistem Informasi UIN Alauddin Makassar',
    description: 'Januari - Desember 2022',
    imageUrl: '/images/hmj.jpg', // Ganti dengan path gambar yang sesuai
    width: 400,
    height: 300,
  },
  
  // Tambahkan pengalaman lain sesuai kebutuhan
];

const Organization: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
        <Particle />
        <div className=" relative z-10 sticky top-0 min-h-screen p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Portofolio </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={experience.imageUrl}
                  alt={experience.title}
                  width={experience.width} // Menggunakan lebar dari objek pengalaman
                  height={experience.height} // Menggunakan tinggi dari objek pengalaman
                  className="w-full h-60 object-cover" // Mengatur objek cover untuk gambar
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{experience.title}</h2>
                  <p className="text-gray-700 mt-2">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Organization;

