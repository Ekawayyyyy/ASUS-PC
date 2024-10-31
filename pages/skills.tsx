'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import Particle from '../components/Particle'
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiPhp } from 'react-icons/si';

const skillsData = [
  { name: 'React', icon: <FaReact />, color: 'text-blue-500' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-500' },
  { name: 'PHP', icon: <SiPhp />, color: 'text-green-600' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-green-500' },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-400' },
];
const skills = () => {
  return (
    <>
    <Navbar />
    <section className=" relative z-10 mt-0 flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Berikut adalah beberapa teknologi yang saya kuasai dan gunakan dalam mengembangkan aplikasi web.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div
              className={`${skill.color} text-6xl mb-4 transition-transform duration-300 transform hover:scale-150`}
            >
              {skill.icon}
            </div>
            <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
        <div>
     
            <div className='bg-[url("/images/banner.jpg")] bg-cover bg-center'></div>
        </div>

<Particle />
    <Footer />
    </>

  )
}

export default skills


