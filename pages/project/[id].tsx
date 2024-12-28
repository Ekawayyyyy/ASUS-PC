"use client";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Daftar proyek untuk ditampilkan
  const projects = [
    {
      id: "1",
      title: "Website Sistem CRUD",
      description:
        "Proyek ini melibatkan pembuatan aplikasi web sistem CRUD menggunakan teknologi HTML, CSS, PHP, dan MySQL dengan Fitur-fitur utama termasuk:",
      features: ["Halaman utama", "Form Login", "Halaman Produk"],
      images: [
        { src: "/images/projek1/1.png", alt: "Desain Halaman Utama" },
        { src: "/images/projek1/2.png", alt: "Desain Form Login" },
      ],
    },
    {
      id: "2",
      title: "Design for Brosur Travel",
      description:
        "Proyek ini melibatkan pembuatan desain aplikasi web untuk toko online menggunakan teknologi desain yaitu figma dengan Fitur-fitur utama termasuk:",
      features: ["Halaman utama", "Form Login", "Halaman Produk"],
      images: [
        { src: "/images/projek2/1.png", alt: "Desain Halaman Utama" },
        { src: "/images/projek2/2.png", alt: "Desain Form Login" },
      ],
    },
    {
      id: "3",
      title: "UI/UX Design Website",
      description:
        "Proyek ini melibatkan pembuatan desain aplikasi web untuk toko online menggunakan teknologi desain yaitu figma dengan Fitur-fitur utama termasuk:",
      features: ["Halaman utama", "Form Login", "Halaman Produk"],
      images: [
        { src: "/images/projek3/1.png", alt: "Desain Halaman Utama" },
        { src: "/images/projek3/2.png", alt: "Desain Form Login" },
        { src: "/images/projek3/3.png", alt: "Desain Halaman Produk" },
        { src: "/images/projek3/4.png", alt: "Desain Halaman Produk" },
        { src: "/images/projek3/5.png", alt: "Desain Halaman Produk" },
      ],
    },
    {
      id: "4",
      title: "Website Company Profile",
      description:
        "Proyek ini melibatkan pembuatan desain aplikasi web untuk toko online menggunakan teknologi HTML, CSS, PHP, Javascript dengan Fitur-fitur utama termasuk:",
      features: ["Halaman utama", "Menu Kegiatan", "Menu About/Tentang"],
      images: [
        { src: "/images/project4/1.png", alt: "Desain Halaman Utama" },
        { src: "/images/project4/2.png", alt: "Desain Form Login" },
        { src: "/images/project4/3.png", alt: "Desain Halaman Produk" },
      ],
    },
    {
      id: "5",
      title: "Design Postingan Feed Instagram",
      description:
        "Proyek ini melibatkan pembuatan desain flyer menggunakan teknologi desain yaitu figma dengan Fitur-fitur utama termasuk:",
      features: [
        "Flyer Hari Batik",
        "Flyer Isra' Mi'Raj",
        "Flyer Info Beasiswa",
        "Flyer List Anggota HMJ",
      ],
      images: [
        { src: "/images/project5/1.png", alt: "Desain Halaman Utama" },
        { src: "/images/project5/2.jpg", alt: "Desain Form Login" },
        { src: "/images/project5/3.png", alt: "Desain Halaman Produk" },
        { src: "/images/project5/4.png", alt: "Desain Halaman Produk" },
      ],
    },
    {
      id: "6",
      title: "Design Pamflet Information",
      description:
        "Proyek ini melibatkan pembuatan desain Pamflet/Flyer menggunakan teknologi desain yaitu figma dengan Fitur-fitur utama termasuk:",
      features: ["Cover Pamflet", "Isi 1", "Isi 2"],
      images: [
        { src: "/images/project6/1.png", alt: "Cover Pamflet" },
        { src: "/images/project6/2.png", alt: "Isi 1" },
        { src: "/images/project6/3.png", alt: "Isi 2" },
      ],
    },
    {
      id: "7",
      title: "Design Cover Book",
      description:
        "Proyek ini melibatkan desain cover book untuk menggunakan teknologi desain yaitu figma  & Canva dengan Fitur-fitur utama termasuk:",
      features: ["Cover Book KKN", "Cover Book Fesyar KTI Bank Indonesia"],
      images: [
        { src: "/images/project7/1.png", alt: "Desain Halaman Utama" },
        { src: "/images/project7/2.png", alt: "Desain Form Login" },
        { src: "/images/project7/3.png", alt: "Desain Halaman Produk" },
      ],
    },
    {
      id: "8",
      title: "Design Flyer for Story",
      description:
        "Proyek ini melibatkan desain flyer dalam bentuk ukuran story sosial media menggunakan teknologi desain yaitu figma  & Canva dengan Fitur-fitur utama termasuk:",
      features: ["Month Dump", "Story KKN"],
      images: [
        { src: "/images/project8/2.png", alt: "Desain Halaman Utama" },
        { src: "/images/project8/3.png", alt: "Desain Form Login" },
      ],
    },
    // Tambahkan data proyek lainnya jika diperlukan
  ];

  // Menemukan proyek berdasarkan ID
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-10">
        <p>Proyek tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section id="project-detail" className="py-5 px-8 w-[90%] mx-auto">
        <div className="container text-justify">
          <a
            href="/portfolio.html"
            className="text-secondary mb-5 inline-block text-underline"
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact");
            }}
          >
            Back
          </a>
          <h2 className="text-center mb-5 font-bold">{project.title}</h2>
          <p>{project.description}</p>
          {/* Menampilkan features dalam daftar vertikal */}
          <ul className="list-disc pl-6 mb-4">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-center mb-5">
            Berikut beberapa gambar desain dari proyek ini:
          </p>
          {/* Grid untuk gambar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="rounded shadow overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectDetail;
