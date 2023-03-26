import React from 'react'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import HeroImage from '../../components/heroImage'
import Instruct from '../../components/instructions'
import NavBar from '../../components/navbar'
// import UseCase from '../../components/usecases'
import UseCases from '../../usecases'

export default function Home() {
   return (
      <div id='mainPage' className=''>
         <NavBar />
         <Hero />
         <HeroImage />
         <Instruct />
         <UseCases />
         <Footer />
      </div>
   )
}
