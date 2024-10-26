import React from 'react';
import Particle from './Particle';
import Image from 'next/image';
import Link from 'next/link'; // Impor Link dari Next.js

const Content = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className=" w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center">
        <div className="relative z-10">
          <h1 className="text-[35px] font-bold md:text-[50px] text-black">
            HI, IM <span className="text-[#875300]">Ekaway</span>
          </h1>
          <h3 className='text-black font-bold text-[20px]'> Junior Frontend Developer </h3>
          {/* Tombol About Me */}
          <Link href="/about"> {/* Ganti dengan path yang sesuai */}
            <span className="mt-4 font-semibold inline-block px-6 py-2 text-black bg-[#875300] rounded hover:bg-yellow-600 transition duration-300 cursor-pointer">
              About Me
            </span>
          </Link>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <Image
            src="/images/fotoku.PNG" // Pastikan gambar Anda dalam format PNG tanpa background
            alt="Profile Image"
            width={250} // Sesuaikan dengan ukuran gambar yang diinginkan
            height={250} // Sesuaikan dengan ukuran gambar yang diinginkan
            className="rounded-full bg-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
