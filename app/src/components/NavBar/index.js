import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const Navbar = () => {
  const [page, setPage] = useState("Home");

  const navigate = useNavigate();

  const navItems = [
  { label: 'Home', path: '/home', group: null },
  { label: "Ben's Page", path: '/ben', group: 'Ben' },
  { label: 'Images', path: '/BenImages', group: 'Ben' },
  { label: "Ben's API", path: '/BenAPI', group: 'Ben' },
  { label: "Will's Page", path: '/will', group: 'Will' },
  { label: 'Images', path: '/WillImages', group: 'Will' },
  { label: "Will's API", path: '/WillApi', group: 'Will' },
];

const handleNav = (path, label) => {
  navigate(path);
  setPage(label);
};

return (
  <div className='navBar'>
    <button className="home-button" onClick={() => handleNav('/home', 'Home')}>Home</button>

    {['Ben', 'Will'].map((name) => (
      <div className="dropdown" key={name}>
        <button className="dropdown-button">{name} ▾</button>
        <div className="dropdown-content">
          {navItems
            .filter(item => item.group === name)
            .map(item => (
              <div
                key={item.path}
                onClick={() => handleNav(item.path, item.label)}
                className="dropdown-options"
              >
                {item.label}
              </div>
            ))}
        </div>
      </div>
    ))}

    <div className="page-title">{page}</div>
  </div>
);

};

export default Navbar;
