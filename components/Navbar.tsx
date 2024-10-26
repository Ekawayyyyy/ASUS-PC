import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
//         <ul className="flex space-x-4">
//           <li>
//             <Link href="/" className="text-white">Home</Link>
//           </li>
//           <li>
//             <Link href="/about" className="text-white">About</Link>
//           </li>
//           <li>
//             <Link href="/projects" className="text-white">Projects</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import { Bars3Icon } from '@heroicons/react/16/solid';
import React from "react";



const Navbar = () => {
  return (
    <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-white shadow-md">
      <div className="flex items-center justify-between  w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-black font-bold">
          EKA
          <span className="text-[#875300]">WAY</span>
        </h1>
        <div className="nav-link">  <Link href="/" className="text-black">Home</Link></div>
        <div className="nav-link">  <Link href="/about" className="text-black">About</Link></div>
        <div className="nav-link">  <Link href="/education" className="text-black">Education</Link></div>
        <div className="nav-link">  <Link href="/experience" className="text-black">Experience</Link></div>
        <div className="nav-link">  <Link href="/skills" className="text-black">Skills</Link></div>
        <div className="nav-link">  <Link href="/contact" className="text-black">Contact</Link></div>
      </div>
    </div>
  );
};

export default Navbar;