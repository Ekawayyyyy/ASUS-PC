'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Particle from '@/components/Particle';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '625161659160'; // Ganti dengan nomor WhatsApp tujuan (format internasional, tanpa '+' di awal)
    const textMessage = `Halo, saya ${name}.\nEmail: ${email}\nPesan: ${message}`;

    // Buat link WhatsApp dengan pesan
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
    
    // Arahkan ke WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <Navbar />
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
        <Particle />
        <div className="relative z-10 sticky flex flex-col items-center justify-center min-h-screen bg-none p-4">
          <h1 className="relative z-10 text-3xl font-bold mb-4">Kontak Kami</h1>
          <form onSubmit={handleSendMessage} className="relative z-10 w-full bg-white max-w-md p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nama Anda"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Anda"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea
                id="message"
                placeholder="Tulis pesan Anda di sini..."
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
