import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import logo from "../assets/images/logo.png";

export default function Header() {
  const { user, logout } = useAuth();
  const { count } = useCart();
  const nav = useNavigate();

  return (
    <header className="site-header">
      {/* LEFT - LOGO */}
      <Link to="/" className="logo">
        <img src={logo} alt="Nazir Fruit Shop" className="logo-img" />
        <div className="logo-text">
          <span className="logo-title">Nazir Fruit Shop</span>
          <span className="logo-sub">Fresh • Local • Healthy</span>
        </div>
      </Link>

      {/* CENTER - SEARCH */}
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Search fresh fruits..." />
        <button type="submit">Search</button>
      </form>

      {/* RIGHT SECTION */}
      <div className="header-right">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/contact">Contact</Link>
          {user && <Link to="/orders">Orders</Link>}
        </nav>

        <Link to="/cart" className="cart-link">
          🛒
          {count > 0 && <span className="cart-badge">{count}</span>}
        </Link>

        {user ? (
          <div className="user-section">
            <span className="welcome">Hi, {user.name}</span>
            <button
              className="logout-btn"
              onClick={() => {
                logout();
                nav("/");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}