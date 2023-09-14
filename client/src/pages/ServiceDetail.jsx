import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Hourglass, RotatingLines } from 'react-loader-spinner';

const ServiceDetail = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div>
        {/* <Hourglass
          
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        /> */}
      </div>
    </div>
  )
}

export default ServiceDetail