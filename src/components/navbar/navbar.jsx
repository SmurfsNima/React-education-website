import "./navbar.css";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
        <li><Link to="hero" smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to="program" smooth={true} duration={500} offset={-260}>programs</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-150}>about us</Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-260}>campus</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-260}>testimonials</Link></li>
        <li>
        <Link className="btn" to="contact" smooth={true} duration={500} offset={-260}>contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
