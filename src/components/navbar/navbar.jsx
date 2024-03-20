import "./navbar.css";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png' 
const Navbar = () => {
  const [sticy, setSticy] = useState(false);
  const [click , setClick] = useState(false)

  const toggleClick = ()=> setClick(!click)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticy(true) : setSticy(false);
    });
  }, []);
  return (
    <nav className={`container ${sticy ? "dark-nav" : ""}`}>
      <img src={menu_icon} className="menu-icon" alt="" onClick={toggleClick} />
      <ul className={` ${click ? 'show-menu' : ''}`}>
        <li><Link to="hero" smooth={true} duration={500} offset={0}>خانه</Link></li>
        <li><Link to="program" smooth={true} duration={500} offset={-260}>برنامه ها</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-150}>درباره ما</Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-260}>اردوگاه</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-260}>نظرات دانشجویان</Link></li>
        <li>
        <Link className="btn" to="contact" smooth={true} duration={500} offset={-260}>ارتباط با ما</Link>
        </li>
      </ul>
      <img src={Logo} alt="" className="logo" />
      
    </nav>
  );
};

export default Navbar;
