import "./navbar.css";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [sticy, setSticy] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticy(true) : setSticy(false);
    });
  }, []);
  return (
    <nav className={`container ${sticy ? "dark-nav" : ""}`}>
      <img src={Logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>Products</li>
        <li>About us</li>
        <li>Campus</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
