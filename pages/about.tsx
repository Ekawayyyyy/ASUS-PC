'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Particle from '../components/Particle';
import Link from 'next/link';
import Footer from '../components/Footer';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center flex-grow">
        <Navbar />
        <Particle />
        <main className="relative z-10 container mx-auto px-6 md:px-10 lg:px-10 py-10 ">
          <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-20">
            <div className="flex justify-center lg:justify-end mb-6 lg:mb-0">
              <Image
                src="/images/fotoku.PNG"
                alt="Profile Image"
                width={250}
                height={250}
                className="rounded-full shadow-lg bg-white"
              />
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
              <p className="text-base md:text-lg text-justify leading-relaxed mb-6">
                Seorang Freshgraduate jurusan Sistem Informasi di UIN Alauddin
                Makassar yang memiliki minat dalam dunia teknologi dan manajemen
                administratif. Saya memiliki pengalaman magang di Kantor
                Perwakilan Bank Indonesia Provinsi Sulawesi Selatan, sehingga
                saya belajar banyak tentang data entry, microsoft office, dan
                kerjasama tim. Saat saya masih kuliah, saya bergabung dengan
                berbagai organisasi seperti HMJ dan komunitas penerima beasiswa
                Bank Indonesia yaitu GenBI. Keinginan untuk belajar dan bekerja
                selalu hadir untuk menemukan sesuatu yang dapat mengasah
                kemampuan dan pengembangan potensi diri.
              </p>
              <p>Hubungi saya :</p>
              <div className="flex justify-center lg:justify-start mt-6 space-x-6 text-xl mb-6">
                <Link
                  href="https://www.instagram.com/ekawdmynti/"
                  aria-label="Instagram"
                  className="hover:text-gray-600"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/ekawdmynti"
                  aria-label="Facebook"
                  className="hover:text-gray-600"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://github.com/Ekawayyyyy"
                  aria-label="GitHub"
                  className="hover:text-gray-600"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ekawahyunidarmayanti"
                  aria-label="Linkedin"
                  className="hover:text-gray-600"
                >
                  <FaLinkedin />
                </Link>
              </div>
              <Link
                href="https://drive.google.com/file/d/1zjizJEXxyzHXhCCClXmhvymDT4oG5FsM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2  mt-4 bg-yellow-600 text-white font-bold rounded hover:bg-yellow-800 transition duration-300"
              >
                Download CV
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
