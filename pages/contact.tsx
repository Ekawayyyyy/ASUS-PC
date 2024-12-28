'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Particle from "@/components/Particle";
import Link from "next/link";

const Contact: React.FC = () => {
  // Daftar proyek untuk ditampilkan di galeri
  const projects = [
    {
      id: 1,
      title: "Website Sistem CRUD",
      imageUrl: "images/project1.png",
      description: "Html, Css, PHP, MySQL",
    },
    {
      id: 2,
      title: "Design for Brosur Travel",
      imageUrl: "images/project2.png",
      description: "Html, Css, Bootstrap",
    },
    {
      id: 3,
      title: "UI/UX Design Website",
      imageUrl: "images/project3.png",
      description: "Figma",
    },
    {
      id: 4,
      title: "Website Company Profile",
      imageUrl: "images/project4.png",
      description: "Html, CSS, PHP, Javascript",
    },
    {
      id: 5,
      title: "Design Postingan Feed Instagram",
      imageUrl: "images/project5.png",
      description: "Figma",
    },
    {
      id: 6,
      title: "Design Pamflet Information",
      imageUrl: "images/project6.png",
      description: "Canva",
    },
    {
      id: 7,
      title: "Design Cover Book",
      imageUrl: "images/project7.png",
      description: "Figma & Canva",
    },
    {
      id: 8,
      title: "Design Flyer for Story Sosial Media",
      imageUrl: "images/project8.png",
      description: "Figma & Canva",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center h-auto">
        <Particle />
        <div className="relative z-10 sticky flex flex-col items-center justify-center min-h-screen bg-none p-4">
          <h1 className="relative z-10 text-3xl font-bold mb-4 text-black">
            Galeri Proyek
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <Link href={`/project/${project.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Lihat Detail
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
