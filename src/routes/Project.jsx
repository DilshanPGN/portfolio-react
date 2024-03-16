import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/heroimg2/HeroImg2'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Footer/>
    </div>
  )
}

export default Project
