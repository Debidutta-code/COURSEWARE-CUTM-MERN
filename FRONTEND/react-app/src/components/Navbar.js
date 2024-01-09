// Navbar.js
import '../styles/Navbar.css';
import img from '../images/centurion1.jfif';
import { Link } from 'react-router-dom';
import SearchOption from './SearchOption';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={img} alt="Logo" className="logo" />
        <h1 className="company-name">COURSEWARE CUTM</h1>
      </div>
      <div className="left-section">
        <Link to="/home"> <button type='button' className='home-button'>Home</button> </Link>
        {/* <button type="button" className="home-button"><Link to="/" className="nav-link">Home</Link></button> */}
      </div>
      <SearchOption></SearchOption>
      <div className="right-section">
        <div className="auth-links">
          <Link to="/login" className="nav-link">Login</Link>
          <span className="divider">|</span>
          <Link to="/register" className="nav-link">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;