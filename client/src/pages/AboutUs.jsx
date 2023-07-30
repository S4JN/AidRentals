import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import "./css/aboutus.css"

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div class="team-card">
        <div class="team-avatar">

        </div>
        <div class="team-info">
          <h2>Meet Our Team</h2>
          <h3>Srajan, Varad, and Aditya</h3>
          <p>We are a group of three highly skilled developers currently pursuing our final year of BE in IET DAVV.</p>
          <p>We specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack and have a passion for building innovative web applications.</p>
          <p>Feel free to get in touch with us for any exciting projects or opportunities!</p>
        </div>
      </div>


    </div>
  )
}

export default AboutUs