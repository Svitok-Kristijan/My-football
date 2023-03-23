import React from "react";
import shopItems from "../../json/shop.json";
import "./shop.styles.css";

function Shop() {
  return (
    <div className="shop-container">
      <h1>Shop Items</h1>
      <div className="shop-items">
        {shopItems.items.map((item) => (
          <div className="shop-item" key={item.name}>
            <img src={item.imgUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>€{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
