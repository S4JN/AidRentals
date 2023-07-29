import "./navbar.css"
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Sahaayata</span>
        <div className="navItems">
          <span className="nnnn"><AddSharpIcon/>Add item</span>
          <span className="nnnn">Track my Request</span>
          <span className="nnnn">Facilities</span>
          <span className="nnnn"><LogoutSharpIcon/>Sign Out</span>
          

        </div>
      </div>
    </div>
  )
}

export default Navbar