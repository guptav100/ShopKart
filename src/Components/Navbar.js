import React from "react";
import { useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbody">
      <header style={{ backgroundColor: "black" }}>
        <h4 className="shopkart">ShopKart</h4>
        <nav ref={navRef}>
          <a href="/#">HOME</a>
          <a href="/#">ABOUT</a>
          <a href="/#">
            <select
              style={{
                backgroundColor: "black",
                color: "white",
                outline: "none",
                border: "none",
                borderBottom: "1px solid white",
              }}
              name=""
              id=""
            >
              <option value="">OUR PRODUCTS</option>
              <option value="">PRODUCT 1</option>
              <option value="">PRODUCT 2</option>
              <option value="">PRODUCT 3</option>
              <option value="">PRODUCT 4</option>
            </select>
          </a>
          <a href="/#">CONTACT US</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <h4 className="wishlist">Wishlist(0)  </h4>
        <h4 className="wishlist">  Bag(0)</h4>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
