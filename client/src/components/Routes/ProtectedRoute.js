import React, { useEffect } from 'react'

import { Navigate } from 'react-router-dom';
import axios from "axios";

const ProtectedRoute = ({children}) => {
    
    //get user
    const getUser = async()=>{
        try {
            console.log(localStorage.getItem("token"));
            //tobe solved


            const config = {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              };

            const {data}= await axios.get("http://localhost:8000/api/v1/auth/current-user",config);
            if(data?.success){
             
                console.log("user exists");
                console.log(data);
            }
        } catch (error) {
            // localStorage.clear();
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized');
                // Redirect to login page               
            }
            console.log(error);
        }
    }
    useEffect(()=>{
        getUser();
    },[])

    if (localStorage.getItem('token')) {
        return React.createElement(React.Fragment, null, children);
      } else {
        return React.createElement(Navigate, { to: '/login' });
      }
    
}

export default ProtectedRoute