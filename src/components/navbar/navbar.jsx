import "./navbar.css";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="container">
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
