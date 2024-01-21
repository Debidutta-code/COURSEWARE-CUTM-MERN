// Navbar.js
import '../styles/Navbar.css';
import img from '../images/centurion1.jfif';
import { Link } from 'react-router-dom';
import SearchOption from './SearchOption';
import { UserContext } from '../App';
import { useContext } from 'react';

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () => {
    if (state === "admin" || state === "teacher") {
      return (
        <div className="auth-links">
          <Link to='/logout' className="nav-link">Logout</Link>
        </div>
      );
    }
    else{
      return(
        <div className="auth-links">
          <Link to="/login" className="nav-link">Teacher</Link>
          <span className="divider">|</span>
          <Link to="/loginadministrator" className="nav-link">Administrator</Link>
        </div>
      )
    }
  }

  const Homeordashboard = () => {
    if(state === "teacher"){
      return(
        <div className="left-section">
          {/* <Link to="/teacherdashboard"> <button type='button' className='teacher-home-button'>Dashboard</button> </Link>
          <Link to="/addcourses"> <button type='button' className='teacher-home-button'>Add Courses</button> </Link> */}
          {/* <button type="button" className="home-button"><Link to="/" className="nav-link">Home</Link></button> */}
        </div>
      )
    }
    else if(state === "admin"){
      return(
        <div className="left-section">
          {/* <Link to="/admindashboard"> <button type='button' className='teacher-home-button'>Dashboard</button> </Link> */}
          {/* <button type="button" className="home-button"><Link to="/" className="nav-link">Home</Link></button> */}
        </div>
      )
    }
    else{
      return(
        <>
          <div className="left-section">
            <Link to="/home"> <button type='button' className='home-button'>Home</button> </Link>
            {/* <button type="button" className="home-button"><Link to="/" className="nav-link">Home</Link></button> */}
          </div>
          <SearchOption></SearchOption>

        </>
      )
    }
  }

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={img} alt="Logo" className="logo" />
        <h1 className="company-name">COURSEWARE CUTM</h1>
      </div>
      <Homeordashboard />
      <div className="right-section">
        <RenderMenu/>
      </div>
    </div>
  );
};

export default Navbar;