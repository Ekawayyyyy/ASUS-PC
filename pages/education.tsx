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
import Navbar from '@/components/Navbar';
import React from 'react';

interface ExperienceItemProps {
  year: string;
  title: string;
  location: string;
  description: string;
  isLeft: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, location, description, isLeft }) => (
  <div className={`relative flex items-center justify-${isLeft ? 'start' : 'end'} w-full my-8`}>
    {/* Card */}
    <div className={`bg-gray-700 mx-12 my-12 p-6 rounded-lg shadow-lg w-full md:w-5/12 ${isLeft ? 'ml-auto' : 'mr-auto'} `}>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="text-sm text-gray-400">{location}</span>
      <p className="text-white mt-2">{description}</p>
    </div>
    {/* Year and circle */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full border-4 border-gray-500"></div>
    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-16 text-gray-400">
      {year}
    </span>
  </div>
);

const Timeline: React.FC = () => {
  <Navbar />
  const experiences = [
    {
      year: '2019',
      title: 'Graduated Bootcamp',
      location: 'Miami, FL',
      description: 'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
      isLeft: true,
    },
    {
      year: '2019 - 2021',
      title: 'Front-End Developer',
      location: 'Orlando, FL',
      description: 'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
      isLeft: false,
    },
    {
      year: '2021 - present',
      title: 'Full-Stack Developer',
      location: 'Houston, TX',
      description: 'I\'m now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I\'m open to full-time opportunities.',
      isLeft: true,
    },
  ];

  return (
    
    <>
     <Navbar />
     <div className="bg-gray-900 min-h-screen text-gray-200">
      <h2 className="text-3xl font-bold text-center mt-8 mb-12">My Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute w-1 bg-gray-500 left-1/2 transform -translate-x-1/2 h-full"></div>
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
    
    </>
  );
};

export default Timeline;

