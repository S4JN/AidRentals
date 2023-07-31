import "./navbar.css"
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import AddForm from "./AddForm/AddForm";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";


const Navbar = () => {

  

  const [showForm, setShowForm] = useState(false);
  const { user } = useUserContext();
  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload();
  }

  const handleClick = () => {
    setShowForm(true);
  }
  const handleFormClose = () => {
    setShowForm(false); // Set showForm to false to close the form
  };

  return (
    <div>
      <div>
      {showForm && (
        <div className="overlay" >
          <AddForm setShowForm={setShowForm} showForm={showForm} handleFormClose={handleFormClose} />
        </div>
      )}
      </div>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Sahaayata</span>
          <div className="navItems">
            <span className="nnnn" onClick={handleClick}><AddSharpIcon />Add item</span>
            <span className="nnnn">Track my Request</span>
            <span className="nnnn">{user?.name}<br />{user?.role}</span>
            <div onClick={()=>handleLogout()}>
              <span className="nnnn"><LogoutSharpIcon />Sign Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Navbar