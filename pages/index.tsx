'use client';
import Navbar from '../components/Navbar';
import Content from '@/components/Content';
// import About from '@/pages/about';
// import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Timeline from './education';
// import Education from './education';
// import Contact from './contact';

// import Link from 'next/link';
const Home = () => {
  return (
    <>
      <Navbar />
      <Content />
      
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
