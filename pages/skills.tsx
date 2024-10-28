'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import Particle from '../components/Particle'

const skills = () => {
  return (
    <>
    <Navbar />
        <div>
     
            <div className='h-[88vh] bg-[url("/images/banner.jpg")] bg-cover bg-center'></div>
        </div>
        <Particle />
    <Footer />
    </>

  )
}

export default skills
