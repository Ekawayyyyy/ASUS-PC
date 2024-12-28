"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 sticky z-[10000] top-0 w-full mt-24 shadow-md">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex justify-center mt-6 space-x-6 text-xl">
          <Link
            href="https://www.instagram.com/ekawdmynti/"
            aria-label="Instagram"
            className="hover:text-gray-400"
          >
            <FaInstagram />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-gray-400">
            <FaFacebook />
          </Link>
          <Link
            href="https://github.com/Ekawayyyyy"
            aria-label="GitHub"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ekawahyunidarmayanti"
            aria-label="Linkedin"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </Link>
        </div>

        <div className="flex justify-center mt-6 space-x-4 text-sm">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Portofolio
          </Link>
          <Link href="/education" className="hover:text-gray-400">
            Organization
          </Link>
          <Link href="/experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link href="/skills" className="hover:text-gray-400">
            Skills
          </Link>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Created by :{" "}
          <span className="font-bold text-white">Eka Wahyuni Darmayanti</span> |
          © 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
