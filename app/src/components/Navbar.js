import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


  const navigate = useNavigate();

  const homenav = () => {
    navigate("/home");
  };
  const bennav = () => {
    navigate("/ben");
  };
  const willnav = () => {
    navigate("/will");
  };
    const imagenav = () => {
    navigate("/images");
  };
  return (
    <nav className='navBar'>
      <ul className='nav-List'>

                <div class="header-buttons">
                <div class="header-button" onClick={homenav}> Home</div>
                <div class="header-button" onClick={bennav}>Ben's Page</div>
                <div class="header-button" onClick={willnav}>Will's Page</div>
                <div class="header-button"onClick={imagenav}>Images</div>
                </div> 

      </ul>
    </nav>
  );
};

export default Navbar;