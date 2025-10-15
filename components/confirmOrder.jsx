import confirmed from "../assets/images/icon-order-confirmed.svg";
import React from "react";

export default function OrderConfirmation({ closeModal, cartItems }) {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <section className="overlay">
      <section className="modal">
        <img src={confirmed} alt="confirmed logo" />
        <h1>Order Confirmed</h1>
        <p className="enjoy">We hope you enjoy your food!</p>

        <ul className="ordered-list">
          {cartItems.map((item, i) => (
            <li key={i} className="ordered-items">
              <section className="img-name">
                <img src={item.image.thumbnail} alt={item.name} />
                <section className="order-list-info">
                  <p className="item-name">{item.name}</p>
                  <p className="price">
                    <span className="quantity">{item.quantity}x</span>
                    <span className="price-group">@ ${item.price.toFixed(2)}</span>
                  </p>
                </section>
              </section>
              <span className="item-price">
                ${(item.quantity * item.price).toFixed(2)}
              </span>
            </li>
          ))}
          <section className="order-total">
          <p>Order Total:</p>
          <strong>${totalPrice.toFixed(2)}</strong>
        </section>
        </ul>

        <button onClick={closeModal} className="confirm-btn">
          Start New Order
        </button>
      </section>
    </section>
  );
}
