// pages/education.tsx
import Navbar from "@/components/Navbar";
import Head from "next/head";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    institution: "University of Example",
    location: "Example City, Example Country",
    year: "2019 - 2023",
    description: "Studied core principles of software engineering, algorithms, data structures, and web development.",
  },
  {
    id: 2,
    title: "High School Diploma",
    institution: "Example High School",
    location: "Example City, Example Country",
    year: "2015 - 2019",
    description: "Focused on science, mathematics, and computer studies, with a passion for technology and programming.",
  },
  {
    id: 3,
    title: "Full Stack Web Development Bootcamp",
    institution: "Example Academy",
    location: "Online",
    year: "2021",
    description: "Completed an intensive bootcamp focusing on full-stack web development using JavaScript, React, Node.js, and Tailwind CSS.",
  },
];

const Education = () => {
  return (
    <>
    <Navbar />
      <Head>
        <title>Education - My Portfolio</title>
      </Head>
      <div className=" min-h-screen bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-semibold text-center mb-8">Education</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-60 backdrop-blur-lg shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.institution}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="mt-2 text-sm text-gray-500">{item.year}</p>
                <p className="mt-4 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
