// import React from 'react'
// import './footer.css'

// export default function Footer(){
//   const year = new Date().getFullYear()
//   return (
//     <footer className="site-footer">
//       <div className="footer-inner">
//         <div className="footer-left">
//           <div className="footer-brand">
//             <span className="logo-emoji">🍉</span>
//             <div>
//               <strong>Nazir Fruit Shop</strong>
//               <div className="small">Fresh · Local · Healthy</div>
//             </div>
//           </div>
//           <div className="small" style={{marginTop:8}}>at urwan more tellaiya dam road, chandwara koderma jharkhand 825409</div>
//           <div className="copyright">© {year} Nazir Fruit Shop. All rights reserved.</div>
//         </div>

//         <div className="footer-center">
//           <form className="newsletter" onSubmit={(e)=>{ e.preventDefault(); alert('Subscribed — thanks!') }}>
//             <label className="small">Get offers & updates</label>
//             <div style={{display:'flex',gap:8,marginTop:8}}>
//               <input placeholder="Enter your email" />
//               <button className="button">Subscribe</button>
//             </div>
//           </form>
//         </div>

//         <div className="footer-right">
//           <div className="social-links">
//             <a href="https://instagram.com/nazirfruitshop" target="_blank" rel="noopener noreferrer" className="social-btn">Instagram</a>
//             <a href="https://wa.me/919876543210?text=Hello%20Nazir%20Fruit%20Shop" target="_blank" rel="noopener noreferrer" className="social-btn">WhatsApp</a>
//             <a href="https://facebook.com/nazirfruitshop" target="_blank" rel="noopener noreferrer" className="social-btn">Facebook</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

import React from "react";
import "./footer.css";
import logo from "../assets/images/logo.png"; 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-section footer-left">
          <div className="footer-brand">
            <img
              src={logo}
              alt="Nazir Fruit Shop Logo"
              className="footer-logo"
            />
            <div>
              <h2 className="brand-name">Nazir Fruit Shop</h2>
              <p className="tagline">Fresh · Local · Healthy</p>
            </div>
          </div>

          <p className="footer-address">
            At Urwan More, Tellaiya Dam Road <br />
            Chandwara, Koderma, Jharkhand – 825409
          </p>

          <p className="copyright">
            © {year} Nazir Fruit Shop. All rights reserved.
          </p>
        </div>

        {/* CENTER SECTION */}
        <div className="footer-section footer-center">
          <h3>Get Offers & Updates</h3>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed Successfully 🎉");
            }}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-section footer-right">
          <h3>Connect With Us</h3>

          <div className="social-links">
            <a
              href="https://instagram.com/nazirfruitshop"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/919876543210?text=Hello%20Nazir%20Fruit%20Shop"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              WhatsApp
            </a>

            <a
              href="https://facebook.com/nazirfruitshop"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}