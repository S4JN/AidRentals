import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Featured from '../components/Featured/Featured'
import { Box, styled, Typography } from '@mui/material'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Container className='homeContainer'>
        <Featured />
        <div>
          <Heading variant="h2">Browse the inventory</Heading>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Home

const Container = styled(Box)`
${'' /* margin-top: 50px; */}
  display: flex;
  flex-direction: column;
   align-items: start;
   gap: 30px;
`

const Heading = styled(Typography)`
  font-weight: bold;
  font-size: 32px;
  margin-top: 5%;
  margin-left: 200px;
`

