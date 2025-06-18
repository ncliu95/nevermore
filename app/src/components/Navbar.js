import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
    const benimagenav = () => {
    navigate("/BenImages");
    setPage('Ben\'s Images');
  };

  const willimagenav = () => {
    navigate("/WillImages");
    setPage('Will\'s Images');
  };

    const ben_apinav = () => {
    navigate("/BenAPI");
    setPage("Ben's API");
  };

  const will_apinav = () => {
    navigate("/WillApi");
    setPage("Will's API");
  };
  return (
    <div className='navBar'>

      <button className="home-button" onClick={homenav}>Home</button>

      <div className="dropdown">
      <button className="dropdown-button">Ben ▾</button>
      <div className="dropdown-content">
        <div  onClick={bennav} className="dropdown-options">Ben's Page</div>
        <div onClick={benimagenav} className="dropdown-options">Images</div>
        <div onClick={ben_apinav} className="dropdown-options">Ben's API</div>
        <div onClick={will_apinav} className="dropdown-options">Will's API</div>
      </div>
    </div>

      <div className="dropdown">
      <button className="dropdown-button">Will ▾</button>
      <div className="dropdown-content">
        <div  onClick={willnav} className="dropdown-options">Will's Page</div>
        <div onClick={willimagenav} className="dropdown-options">Images</div>
      </div>
    </div>

    <div className="page-title">{page}</div>
    </div>
  );
};

export default Navbar;