import Header from "../components/Header";
import Main from "../components/Main";
import CartList from "../components/CartList";
import { useState } from "react";
import productdata from "../data";
import OrderConfirmation from "../components/confirmOrder";


export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  function removeItem(name) {
  setCartItems(prev => prev.filter(item => item.name !== name));
}

  function addToCart(product) {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        // increase quantity if already in cart
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new item with quantity 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }

  function updateQuantity(name, quantity) {
    setCartItems(prev =>
      prev
        .map(item =>
          item.name === name ? { ...item, quantity } : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  
  function confirmOrder() {
    setIsConfirmed(true);
  }

  function closeModal() {
    setIsConfirmed(false);
    setCartItems([]);
  }
  return(
    <section className="hero">
        <section className="display-product">        
          <Header/>
          <Main
            products={productdata}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
            cartItems={cartItems}
          />
        </section>
        <CartList 
          cartItems={cartItems}
          removeItem={removeItem}
          confirmOrder={confirmOrder}
        />        
        {isConfirmed && <OrderConfirmation closeModal={closeModal}
        cartItems={cartItems}
         />}

    </section>
  );
}