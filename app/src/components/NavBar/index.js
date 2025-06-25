import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const Navbar = () => {
  const [page, setPage] = useState("Home");

  const navigate = useNavigate();

  const handleNav = (path, title) => {
  navigate(path);
  setPage(title);
};

const benLinks = [
  { label: "Ben's Page", path: "/ben" },
  { label: "Images", path: "/BenImages" },
  { label: "Ben's API", path: "/BenAPI" },
];

const willLinks = [
  { label: "Will's Page", path: "/will" },
  { label: "Images", path: "/WillImages" },
  { label: "Will's API", path: "/WillApi" },
];

return (
  <div className="navBar">
    <button className="home-button" onClick={() => handleNav("/", "Home")}>Home</button>

    <div className="dropdown">
      <button className="dropdown-button">Ben ▾</button>
      <div className="dropdown-content">
        {benLinks.map(link => (
          <div
            key={link.path}
            onClick={() => handleNav(link.path, link.label)}
            className="dropdown-options"
          >
            {link.label}
          </div>
        ))}
      </div>
    </div>

    <div className="dropdown">
      <button className="dropdown-button">Will ▾</button>
      <div className="dropdown-content">
        {willLinks.map(link => (
          <div
            key={link.path}
            onClick={() => handleNav(link.path, link.label)}
            className="dropdown-options"
          >
            {link.label}
          </div>
        ))}
      </div>
    </div>

    <div className="page-title">{page}</div>
  </div>
);

};

export default Navbar;
