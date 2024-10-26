// // components/Footer.tsx

// import React from 'react';
// import Link from 'next/link';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#ffffff] text-white py-6 sticky z-[10000] mt-24 ">
//       <div className="container mx-auto flex justify-between px-4">
//         <div className="links text-black">
//           <h4 className="font-bold mb-2">Tautan</h4>
//           <ul className="space-y-1">
//             <li>
//               <Link href="/" className="hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:underline">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/education" className="hover:underline">
//                 Education
//               </Link>
//             </li>
//             <li>
//               <Link href="/experience" className="hover:underline">
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:underline">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="flex-center text-black">
//           <h4 className="font-bold mb-2">Sosial Media</h4>
//           <ul className="space-y-1">
//             <li>
//               <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                 Facebook
//               </Link>
//             </li>
//             <li>
//               <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                 Twitter
//               </Link>
//             </li>
//             <li>
//               <Link href="https://instagram.com/ekwdmynti" target="_blank" rel="noopener noreferrer" className="hover:underline">
//                 Instagram
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="text-center mt-4 text-black">
//         <p>&copy; {new Date().getFullYear()} Ekaway. Semua hak dilindungi.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
'use client';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 sticky z-[10000] mt-24 shadow-md">
      <div className="container mx-auto px-4 lg:px-20">

        <div className="flex justify-center mt-6 space-x-6 text-xl">
          <Link href="https://www.instagram.com/ekawdmynti/" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram /></Link>
          <Link href="#" aria-label="Facebook" className="hover:text-gray-400"><FaFacebook /></Link>
          <Link href="https://github.com/Ekawayyyyy" aria-label="GitHub" className="hover:text-gray-400"><FaGithub /></Link>
          <Link href="https://www.linkedin.com/in/ekawahyunidarmayanti" aria-label="Linkedin" className="hover:text-gray-400"><FaLinkedin /></Link>
        </div>

        <div className="flex justify-center mt-6 space-x-4 text-sm">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/education" className="hover:text-gray-400">Education</Link>
          <Link href="/experience" className="hover:text-gray-400">Experience</Link>
          <Link href="/skills" className="hover:text-gray-400">Skills</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Created by : <span className="font-bold text-white">Eka Wahyuni Darmayanti</span> | © 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
