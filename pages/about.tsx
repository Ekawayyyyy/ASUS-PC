'use client';
import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
const About = () => {
  return (
   <>
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Navbar />
      <main className="container mx-auto mt-10 text-center bg:[#f5f5f5]">
        {/* <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">Hello, im Eka Way, a web developer with a passion for creating amazing web applications.</p> */}
        <div className="grid lg:grid-cols-2">
        <div className="flex-shrink-0 mb-6 lg:mb-20 lg:mr-10 lg:ml-40 lg:mt-10">
          <Image
            src="/images/fotoku.png" // Ganti dengan path gambar yang sesuai
            alt="Profile Image"
            width={250} // Sesuaikan ukuran gambar
            height={250} // Sesuaikan ukuran gambar
            className="rounded-full  shadow-lg"
          />
        </div>
        <div className="text-center lg:text-left lg:mr-16 lg:mt-10 lg:mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-justify">
                Seorang Freshgraduate jurusan Sistem Informasi di UIN Alauddin Makassar yang memiliki minat dalam dunia
                teknologi dan manajemen administratif. Saya memiliki pengalaman magang di Kantor Perwakilan Bank
                Indonesia Sulawesi Selatan, sehingga saya belajar banyak tentang data entry, microsoft office, dan
                kerjasama tim. Saat saya masih kuliah, saya bergabung dengan berbagai organisasi seperti HMJ dan
                komunitas penerima beasiswa Bank Indonesia yaitu GenBI. Keinginan untuk belajar dan bekerja selalu hadir
                untuk menemukan sesuatu yang dapat mengasah kemampuan dan pengembangan potensi diri.
          </p>

          <Link
              href="https://drive.google.com/file/d/1zjizJEXxyzHXhCCClXmhvymDT4oG5FsM/view?usp=sharing=1zjizJEXxyzHXhCCClXmhvymDT4oG5FsM" // Ganti dengan link Google Drive Anda
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-2 bg-yellow-600 text-white font-bold rounded hover:bg-yelloq-800 transition duration-300"
            >
              Download CV
            </Link>
        </div>
        </div>
       
      </main>
    </div>
      <Footer />
    </>
    
  
  );
};

export default About;
//  tambahkan button buat download cv menggunakan link google drive
//