import "./navbar.css"
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import AddForm from "../pages/AddForm";
import { useState } from "react";

const Navbar = () => {

  const [showForm,setShowForm]=useState(false);

  const handleClick=()=>{
    setShowForm(!showForm);
  }

  return (
    <div>
      <div>
     {showForm&&<AddForm className='hide'/>}
      </div>
    <div className="navbar">  
      <div className="navContainer">
        <span className="logo">Sahaayata</span>
        <div className="navItems">
          <span className="nnnn" onClick={handleClick}><AddSharpIcon/>Add item</span>
          <span className="nnnn">Track my Request</span>
          <span className="nnnn">Facilities</span>
          <span className="nnnn"><LogoutSharpIcon/>Sign Out</span>
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Navbar