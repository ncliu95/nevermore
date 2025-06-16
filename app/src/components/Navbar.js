import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssFiles/navBar.css';

const Navbar = () => {

  const [page, setPage] = useState("Home");

  const navigate = useNavigate();

  const homenav = () => {
    navigate("/home");
    setPage('Home');
  };
  const bennav = () => {
    navigate("/ben");
    setPage('Ben\'s Page');
  };
  const willnav = () => {
    navigate("/will");
    setPage('Will\'s Page');
  };
    const imagenav = () => {
    navigate("/images");
    setPage('Images');
  };

    const benapinav = () => {
    navigate("/BenAPI");
    setPage('Ben\'s API');
  };
    const willapinav = () => {
    navigate("/willapi");
  }
  return (
    <div className='navBar'>

      <div className="dropdown">
      <button className="dropdown-button">Pages ▾</button>
      <div className="dropdown-content">
        <div onClick={homenav} className="dropdown-options">Home</div>
        <div  onClick={bennav} className="dropdown-options">Ben's Page</div>
        <div  onClick={willnav} className="dropdown-options">Will's Page</div>
        <div onClick={imagenav} className="dropdown-options">Images</div>
        <div onClick={benapinav} className="dropdown-options">Ben's API</div>
        <div onClick={willapinav} className="dropdown-options">Will's API</div>
      </div>
    </div>

    <div className="page-title">{page}</div>
    </div>
  );
};

export default Navbar; 