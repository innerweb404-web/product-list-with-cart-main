import emptyCart from "../assets/images/illustration-empty-cart.svg";
import removeItemIcon from "../assets/images/icon-remove-item.svg";
import neutral from "../assets/images/icon-carbon-neutral.svg"


export default function CartList({ cartItems, removeItem, confirmOrder}) {
  // Total number of items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // ✅ Total price of all items
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <section className="cart-list">
      <h2>
        Your cart (<span>{totalItems}</span>)
      </h2>

      {cartItems.length === 0 ? (
        <>
          <figure>
            <img src={emptyCart} alt="empty-cart" />
          </figure>
          <p className="descr">Your added items will appear here</p>
        </>
      ) : (
        <>
          <ul className="added-list">
            {cartItems.map((item, i) => (
              <li key={i} className="list-items">
                <section className="added-list-info">
                  <p className="item-name">{item.name}</p>
                  <p className="price">
                    <span className="quantity">{item.quantity}x</span>
                    <span className="price-group">
                      @ ${item.price.toFixed(2)}
                      <span className="item-price">
                        ${" "}
                        {(item.quantity * item.price).toFixed(2)}
                      </span>
                    </span>
                  </p>
                </section>
                <figure className="remove-icon"
                onClick={() => removeItem(item.name)}
                >
                  <img src={removeItemIcon} 
                  alt="remove item" />
                </figure>
              </li>
            ))}
          </ul>

          <section className="order-total">
            <p>
              Order Total:
            </p> 
            <strong>
                ${totalPrice.toFixed(2)}</strong>
            
          </section>
          <section className="delivery">
            <img src={neutral} alt="neitral" />
            <p>This is a <strong>carbon-neutral delivery</strong></p>
          </section>
          
        <button className="confirm-btn" onClick={confirmOrder}>
            Confirm Order
        </button>        
        </>
      )}
    </section>
  );
}
