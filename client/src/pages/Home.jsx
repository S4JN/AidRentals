import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Featured from '../components/Featured/Featured'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>

        <Featured />
      </div>
      <Footer />
    </div>
  )
}

export default Home