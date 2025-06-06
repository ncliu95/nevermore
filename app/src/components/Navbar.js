import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <ul className='nav-List'>
        <li className='leftmostLink'><Link to="/">Home</Link></li>
        <li className='middleLink'><Link to="/ben">Ben's Page</Link></li>
        <li className='rightmostLink'><Link to="/will">Will's Page</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;