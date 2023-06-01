import { Link } from "react-router-dom";
import { useState } from "react";
import "../CSS/nav.css";
import logo from "../images/1.png";
function NavBar() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div className="navBar">
      <div className="imageContainer">
        <img src={logo} alt="logo" className="logo" />
      </div>
      
      <div className="upperNav">
        <Link className="navBarBtn" to="/">
          <h2>Home</h2>
          
        </Link>
        <Link className="navBarBtn" to="/cart">
          <h2>Cart</h2>
        </Link>
      </div>

      <div className="lowerNav">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            name="name"
            value={inputs.name || " "}
            onChange={handleChange}
            className="searchInput"
          />
          <input type="submit" value="Search" className="searchBtn" />
        </form>
      </div>
    </div>
  );
}

export default NavBar;
