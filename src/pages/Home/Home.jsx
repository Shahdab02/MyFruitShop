import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import banner from "../../assets/images/best_banner.png";

export default function Home() {
  return (
    <div className="home">
      {/* HERO BANNER */}
      <section
        className="hero-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content">
          <h1>Fresh & Healthy Fruits Delivered Daily</h1>
          <p>Farm-fresh fruits delivered in Chandwara at best prices.</p>
          <Link to="/product" className="shop-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="features-strip">
        <div>🚚 Free Delivery Above ₹299</div>
        <div>⚡ Same Day Delivery</div>
        <div>💚 100% Fresh Guarantee</div>
        <div>🔒 Secure Payments</div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured container">
        <h2>Featured Products</h2>

        <div className="product-row">
          {/* PRODUCT CARD */}
          <div className="product-card">
            <div className="badge">Best Seller</div>
            <div className="product-img">🥭</div>
            <h4>Premium Mango</h4>

            <div className="rating">⭐⭐⭐⭐☆ (4.2)</div>

            <div className="price-section">
              <span className="price">₹120/kg</span>
              <span className="delivery">Delivery: ₹20</span>
            </div>

            <div className="free-delivery">Free delivery on ₹299+</div>

            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-img">🍎</div>
            <h4>Fresh Apple</h4>
            <div className="rating">⭐⭐⭐⭐⭐ (4.8)</div>
            <div className="price-section">
              <span className="price">₹150/kg</span>
              <span className="delivery">Delivery: ₹20</span>
            </div>
            <div className="free-delivery">Free delivery on ₹299+</div>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-img">🍇</div>
            <h4>Seedless Grapes</h4>
            <div className="rating">⭐⭐⭐⭐☆ (4.3)</div>
            <div className="price-section">
              <span className="price">₹90/kg</span>
              <span className="delivery">Delivery: ₹20</span>
            </div>
            <div className="free-delivery">Free delivery on ₹299+</div>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="badge discount">10% OFF</div>
            <div className="product-img">🍌</div>
            <h4>Fresh Banana</h4>
            <div className="rating">⭐⭐⭐⭐☆ (4.1)</div>
            <div className="price-section">
              <span className="price">₹50/dozen</span>
              <span className="delivery">Delivery: ₹20</span>
            </div>
            <div className="free-delivery">Free delivery on ₹299+</div>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}