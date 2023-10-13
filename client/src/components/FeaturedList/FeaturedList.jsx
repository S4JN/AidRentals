import React,{useState, useEffect } from 'react'
import "./featuredList.css"
import axios from 'axios';


// http://localhost:8000/api/v1/inventory/get-random
const getRatingColor = (ratingValue) => {
  if (ratingValue >= 1 && ratingValue <= 2) {
    return 'red';
  } else if (ratingValue === 3) {
    return 'yellow';
  } else if (ratingValue >= 4 && ratingValue <= 5) {
    return 'green';
  } else {
    return 'blue'; 
  }
};




const Item = ({ name, city, price, rating, review,image }) => { 


  return (
    <div className="fpItem">
      <img
        src={image}
        alt="img"
        className="fpImg"
      />
      <span className="fpName">{name}</span>
      <span className="fpCity">{city}</span>
      <span className="fpPrice">Available ₹{price}</span>
      <div className="fpRating">
        <button style={{ backgroundColor: getRatingColor(rating) }}>{rating}</button>
        <span>{review}</span>
      </div>
    </div>
  );
};


const FeaturedList = () => {
  const [randItem,setrandItem]=useState([]);

  const getRandom =async()=>{
    try{
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const {data}=await axios.get('http://localhost:8000/api/v1/inventory/get-random',
      config
      );
      //data. random items
      setrandItem(data.randomItems);
      console.log(data);
    }catch (error) {
      console.log(error);
    }
  }
  
  
  useEffect(()=>{
    getRandom();
  },[])

  const getRatingColor = (ratingValue) => {
    if (ratingValue >= 1 && ratingValue <= 2) {
      return 'red';
    } else if (ratingValue === 3) {
      return 'yellow';
    } else if (ratingValue >= 4 && ratingValue <= 5) {
      return 'green';
    } else {
      return 'blue'; 
    }
  };

  


  const rating = 4;
  const items = [
    { name: 'Bed', city: 'Indore', price: '10', review: 'Bad', rating: '1', image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283" },
    { name: 'Wheel Chair', city: 'Indore', price: '10', review: 'Good', rating: '3',image: "https://images.unsplash.com/photo-1593086586362-d83c6bf009b3" },
    { name: 'Oxymeter', city: 'Indore', price: '10', review: 'Good', rating: '4', image: "https://5.imimg.com/data5/SELLER/Default/2021/9/BB/QC/NL/5038493/neonatal-pulse-oximeter.png" },
    { name: 'Vital Monitor', city: 'Indore', price: '100', review: 'Good', rating: '5' ,image: "https://images.unsplash.com/photo-1513224502586-d1e602410265" },
    
  ];
  return (
    <div className="fp">
      {randItem.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};

export default FeaturedList;