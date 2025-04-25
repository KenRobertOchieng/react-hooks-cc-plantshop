import React, { useState } from "react";

function PlantCard({ plant, onToggleStock }) {
  const { id, name, image, price, inStock = true } = plant;

  function handleClick() {
    onToggleStock(id);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
