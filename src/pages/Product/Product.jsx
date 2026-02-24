import React, { useMemo, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import banner from "../../assets/images/best_banner.png";
import "./product.css";

const PRODUCTS = [
  {
    id: "p1",
    name: "Alphonso Mango",
    price: 199,
    desc: "Sweet & juicy (1kg)",
    category: "Tropical",
    emoji: "🥭",
  },
  {
    id: "p2",
    name: "Kesar Mango",
    price: 179,
    desc: "Premium mangoes (1kg)",
    category: "Tropical",
    emoji: "🥭",
  },
  {
    id: "p3",
    name: "Banana (Cavendish)",
    price: 59,
    desc: "Ripe bananas (1 dozen)",
    category: "Tropical",
    emoji: "🍌",
  },
  {
    id: "p4",
    name: "Red Apple",
    price: 129,
    desc: "Crisp red apples (1kg)",
    category: "Pome",
    emoji: "🍎",
  },
  {
    id: "p5",
    name: "Green Apple",
    price: 139,
    desc: "Tart green apples (1kg)",
    category: "Pome",
    emoji: "🍏",
  },
  {
    id: "p6",
    name: "Sweet Orange",
    price: 99,
    desc: "Juicy oranges (1kg)",
    category: "Citrus",
    emoji: "🍊",
  },
  {
    id: "p7",
    name: "Mosambi",
    price: 89,
    desc: "Refreshing mosambi (1kg)",
    category: "Citrus",
    emoji: "🍋",
  },
  {
    id: "p8",
    name: "Grapes (Black)",
    price: 149,
    desc: "Seedless grapes (500g)",
    category: "Berries",
    emoji: "🍇",
  },
  {
    id: "p9",
    name: "Strawberries",
    price: 249,
    desc: "Sweet strawberries (250g)",
    category: "Berries",
    emoji: "🍓",
  },
  {
    id: "p10",
    name: "Blueberries",
    price: 299,
    desc: "Antioxidant rich (125g)",
    category: "Berries",
    emoji: "🫐",
  },
  {
    id: "p11",
    name: "Pomegranate",
    price: 159,
    desc: "Fresh pomegranate (1kg)",
    category: "Stone",
    emoji: "🍎",
  },
  {
    id: "p12",
    name: "Peach",
    price: 179,
    desc: "Soft peaches (1kg)",
    category: "Stone",
    emoji: "🍑",
  },
  {
    id: "p13",
    name: "Plum",
    price: 129,
    desc: "Sweet plums (1kg)",
    category: "Stone",
    emoji: "🍑",
  },
  {
    id: "p14",
    name: "Papaya",
    price: 89,
    desc: "Ripe papaya (1pc)",
    category: "Exotic",
    emoji: "🧡",
  },
  {
    id: "p15",
    name: "Dragon Fruit",
    price: 349,
    desc: "Exotic dragon fruit (1pc)",
    category: "Exotic",
    emoji: "🐉",
  },
];

export default function Product() {
  const { add } = useCart();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(PRODUCTS.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (active !== "All" && p.category !== active) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
      );
    });
  }, [query, active]);

  return (
    <div className="product-page">
      {/* ===== Premium Banner ===== */}
      <div
        className="product-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-overlay">
          <h1>Premium Fresh Fruits</h1>
          <p>Farm fresh • Fast delivery • 100% natural</p>

          <input
            className="banner-search"
            placeholder="Search Mango, Apple, Banana..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ===== Categories ===== */}
      <div className="category-wrapper">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${cat === active ? "active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== Product Grid ===== */}
      <div className="product-grid">
        {filtered.map((p) => (
          <div key={p.id} className="lux-card">
            <div className="lux-top">
              <div className="lux-badge">Fresh</div>
              <div className="lux-emoji">{p.emoji}</div>
            </div>

            <div className="lux-body">
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>

              <div className="price-row">
                <span className="price">₹{p.price}</span>
                <span className="delivery">+ ₹20 delivery</span>
              </div>

              <div className="free-text">
                Free delivery on orders above ₹299
              </div>

              <button className="lux-btn" onClick={() => add(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-result">No fruits found.</div>
      )}
    </div>
  );
}