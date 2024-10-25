// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My experience</SectionHeading>
//       <VerticalTimeline lineColor="">
//         {experiencesData.map((item, index) => (
//           <React.Fragment key={index}>
//             <VerticalTimelineElement
//               contentStyle={{
//                 background:
//                   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                 boxShadow: "none",
//                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                 textAlign: "left",
//                 padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight:
//                   theme === "light"
//                     ? "0.4rem solid #9ca3af"
//                     : "0.4rem solid rgba(255, 255, 255, 0.5)",
//               }}
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 background:
//                   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//                 fontSize: "1.5rem",
//               }}
//             >
//               <h3 className="font-semibold capitalize">{item.title}</h3>
//               <p className="font-normal !mt-0">{item.location}</p>
//               <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                 {item.description}
//               </p>
//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }
'use client';
import React from 'react';
import styles from '../styles/experience.module.scss';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  const experiences = [
    {
      title: 'Asisten Dosen Mata Kuliah Sistem Basis Data',
      company: 'Prodi Sistem Informasi UIN Alauddin Makassar',
      date: 'September 2023 – Januari 2024',
      description:(
        <ul className='list-disc ml-6'>
        <li>Memberikan pemahaman kepada mahasiswa tentang mata kuliah sistem basis data seperti konsep dasar basis data menggunakan MySQL dan PostgreSQL</li>
        <li>Menangani 3 kelas dengan jumlah mahasiswa kurang lebih 7o orang dengan memberikan penilaian pada setiap mahasiswa sesuai dengan pemahamannya terkait mata kuliah yang diajarkan</li>
        <li>Bekerjasama dengan dosen pengampuh dalam menentukan tugas-tugas yang akan diberikan kepada mahasiswa dalam mencapai tujuan yang diharapkan pada mata kuliah sistem basis data</li>
      </ul>
      )
    },
    {
      title: 'Asisten Administrator Divisi Kepegawaian',
      company: 'Kantor Kementerian Agama Kota Makassar',
      date: 'Agustus – Oktober 2021',
      description:(
        <ul className='list-disc ml-6'>
        <li>Membantu pengelolaan dokumen kearsipan digital dan non digital agar tertata dengan baik</li>
        <li>Terlibat sebagai panitia dalam berbagai kegiatan unggulan yang diselenggarakan KPwBI Sulawesi
        Selatan khususnya pada unit Digitalisasi Sistem Pembayaran.</li>
        <li>Membantu perekapan laporan setoran dan penarikan fisik uang rupiah dari berbagai bank pengelola
        KASTIP dalam proses penyaluran uang rupiah ke berbagai daerah di Provinsi Sulawesi Selatan</li>
        <li>Turut serta mencermati blank spot masing-masing daerah sebagai wujud kesiapan digitalisasi
        daerah dalam percepatan transaksi digital daerah melalui Tim Percepatan dan Perluasan Digitalisasi
        Daerah (TP2DD)</li>
        <li>Membuat desain postingan intagram dan bahan presentasi untuk program yang diselenggarakan
        oleh Tim Divisi SP.</li>
        <li>Berkontribusi dalam sosialisasi kebijakan “User Experience QRIS” di masyarakat dan berbagai
        aktivitas.</li>
      </ul>
      )
    },
    {
      title: 'Magang Asisten Administrasi Divisi Sistem Pembayaran',
      company: 'Kantor Perwakilan Bank Indonesia Provinsi Sulawesi Selatan',
      date: 'Juni – Agustus 2023',
      description:(
        <ul className='list-disc ml-6'>
        <li>Membantu pengelolaan dokumen kearsipan digital dan non digital agar tertata dengan baik</li>
        <li>Terlibat sebagai panitia dalam berbagai kegiatan unggulan yang diselenggarakan KPwBI Sulawesi
        Selatan khususnya pada unit Digitalisasi Sistem Pembayaran.</li>
        <li>Membantu perekapan laporan setoran dan penarikan fisik uang rupiah dari berbagai bank pengelola
        KASTIP dalam proses penyaluran uang rupiah ke berbagai daerah di Provinsi Sulawesi Selatan</li>
        <li>Turut serta mencermati blank spot masing-masing daerah sebagai wujud kesiapan digitalisasi
        daerah dalam percepatan transaksi digital daerah melalui Tim Percepatan dan Perluasan Digitalisasi
        Daerah (TP2DD)</li>
        <li>Membuat desain postingan intagram dan bahan presentasi untuk program yang diselenggarakan
        oleh Tim Divisi SP.</li>
        <li>Berkontribusi dalam sosialisasi kebijakan “User Experience QRIS” di masyarakat dan berbagai
        aktivitas.</li>
      </ul>
      )
    },
  ];

  return (
    <div className={styles.timeline}>
      <h1 className="text-4xl font-bold mb-4">Work Experiences</h1>
      <div className={styles.timelineContainer}>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </div>

  );
};

export default Timeline;
