// pages/education.tsx
// 'use client';
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import Head from "next/head";

// const educationData = [
//   {
//     id: 1,
//     title: "Bachelor of Science in Computer Science",
//     institution: "University of Example",
//     location: "Example City, Example Country",
//     year: "2019 - 2023",
//     description: "Studied core principles of software engineering, algorithms, data structures, and web development.",
//   },
//   {
//     id: 2,
//     title: "High School Diploma",
//     institution: "Example High School",
//     location: "Example City, Example Country",
//     year: "2015 - 2019",
//     description: "Focused on science, mathematics, and computer studies, with a passion for technology and programming.",
//   },
//   {
//     id: 3,
//     title: "Full Stack Web Development Bootcamp",
//     institution: "Example Academy",
//     location: "Online",
//     year: "2021",
//     description: "Completed an intensive bootcamp focusing on full-stack web development using JavaScript, React, Node.js, and Tailwind CSS.",
//   },
// ];

// const Education = () => {
//   return (
//     <>
//     <Navbar />
//       <Head>
//         <title>Education - My Portfolio</title>
//       </Head>
//       <div className=" min-h-screen bg-gray-100 text-gray-900">
//         <div className="container mx-auto px-4 py-16">
//           <h1 className="text-4xl font-semibold text-center mb-8">Education</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {educationData.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white bg-opacity-60 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
//               >
//                 <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
//                 <p className="text-sm text-gray-500">{item.institution}</p>
//                 <p className="text-sm text-gray-500">{item.location}</p>
//                 <p className="mt-2 text-sm text-gray-500">{item.year}</p>
//                 <p className="mt-4 text-gray-700">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Education;
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { ReactNode } from 'react';
import Particle from '@/components/Particle';

interface ExperienceItemProps {
  year: string;
  title: string;
  location: string;
  description: ReactNode;
  isLeft: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, location, description, isLeft }) => (
  <div className={`relative flex items-center justify-${isLeft ? 'start' : 'end'} w-full my-8`}>
    {/* Card */}
    <div className={`bg-white mx-12  p-10 rounded-lg shadow-lg w-full md:w-5/12 ${isLeft ? 'ml-auto' : 'mr-auto'} `}>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <span className="text-sm text-gray-800">{location}</span>
      <span className="text-sm ml-16 text-gray-400">
      {year}
    </span>
      <p className="text-black mt-2">{description}</p>
    </div>
    {/* Year and circle */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#875300] rounded-full border-4 border-gray-500"></div>
   
  </div>
);

const Timeline: React.FC = () => {
  const experiences = [
    {
      year: '2019-2024',
      title: 'UIN Alauddin Makassar',
      location: 'S1 - Sistem Informasi',
      description:(
        <ul className='list-disc ml-6'>
        <li>Penerima Beasiswa Bank Indonesia Provinsi Sulawesi Selatan Periode 2021-2023</li>
        <li>Masuk 7 Besar pada Perlombaan Bisnis Plan Competition tingkat nasional pada Universitas Banyuwangi tahun 2022</li>
        <li>Menjabat sebagai Direktur Manajemen Sumberdaya Manusia (MSDM) pada Komunitas Penerima Beasiswa Bank Indonesia (GenBI) periode 2022-2023</li>
        <li>Menjabat sebagai Koordinator Divisi Komunikasi dan Informasi (Kominfo) pada Himpunan Mahasiswa Jurusan (HMJ) Sistem Informasi periode 2021-2022</li>
      </ul>
      ),
      isLeft: true,
    },
    {
      year: '2016 - 2019',
      title: 'SMK Penerbangan Techno Terapan Makassar',
      location: 'Farmasi',
      description: 'Ketua Pramuka Putri di SMA Penerbangan Techno Terapan Makassar periode 2017-2018',
      isLeft: false,
    },
    {
      year: '2013 - 2016',
      title: 'SMP NEG 09 Marusu',
      location: 'B',
      description: 'Juara 1 Paduan Suara pada Kegiatan 17 Agustus tahun 2016 tingkat se-Kecamatan Marusu',
      isLeft: true,
    },
  ];

  return (
    
    <>
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
    <Particle />
    <Navbar />
    <div className="bg-gray-900 text-gray-200 pt-12 ">
      <h2 className=" relative z-10 text-black text-3xl font-bold text-center mb-12">My Education</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute w-1 bg-[#875300] left-1/2 transform -translate-x-1/2 h-full mb-0"></div>
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index} 
            year={exp.year} 
            title={exp.title} 
            location={exp.location} 
            description={exp.description} 
            isLeft={exp.isLeft}
          />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  
    </>
  );
};

export default Timeline;

