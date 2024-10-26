import React from 'react';
import Particle from './Particle';
import Image from 'next/image';
import Link from 'next/link';

const Content = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[3rem] h-full items-center">
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[35px] lg:text-[50px] font-bold text-black">
            HI, IM <span className="text-[#875300]">Ekaway</span>
          </h1>
          <h3 className="text-black font-bold text-[16px] sm:text-[20px]">
            Junior Frontend Developer
          </h3>
          <Link href="/about">
            <span className="mt-4 font-semibold inline-block px-4 sm:px-6 py-2 text-black bg-[#875300] rounded hover:bg-yellow-600 transition duration-300 cursor-pointer">
              About Me
            </span>
          </Link>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end mt-10 lg:mt-10">
        <Image
            src="/images/fotoku.PNG" // Ganti dengan path gambar yang sesuai
            alt="Profile Image"
            width={250} // Sesuaikan ukuran gambar
            height={250} // Sesuaikan ukuran gambar
            className="rounded-full  shadow-lg bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
