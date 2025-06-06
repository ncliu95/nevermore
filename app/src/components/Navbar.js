import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <ul className='nav-List'>
        <li className='App-Link'><Link to="/">Home</Link></li>
        <li className='App-Link'><Link to="/ben">Ben's Page</Link></li>
        <li className='App-Link'><Link to="/will">Will's Page</Link></li>
        <li className='App-Link'><Link to="/images">Images</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;