// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 sticky z-[10000] ">
      <div className="container mx-auto flex justify-between px-4">
        <div className="links">
          <h4 className="font-bold mb-2">Tautan</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div className="socialMedia">
          <h4 className="font-bold mb-2">Sosial Media</h4>
          <ul className="space-y-1">
            <li>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/ekwdmynti" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Nama Perusahaan. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
