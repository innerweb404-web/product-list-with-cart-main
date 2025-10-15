import { useState } from "react"
import addToCartIcon from '../assets/images/icon-add-to-cart.svg'
import decrement from '../assets/images/icon-decrement-quantity.svg'
import increment from '../assets/images/icon-increment-quantity.svg'
import { useEffect } from "react"



export default function Product({
    image, 
    category, 
    price, 
    name, 
    addToCart, 
    updateQuantity, 
    cartItems}){

    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(0);


    function changeCartBtn(){
        setIsClicked(true);
        setCount(1);
        addToCart({name, price, image, category});
    }

    
  function increase() {
    const newCount = count + 1;
    setCount(newCount);
    updateQuantity(name, newCount);
  }

  function decrease() {
    const newCount = count - 1;
    if (newCount < 1) {
      setIsClicked(false);
      updateQuantity(name, 0);
    } else {
      setCount(newCount);
      updateQuantity(name, newCount);
    }
  }

  useEffect(() => {
    const inCart = cartItems.find(item => item.name === name);
    if (!inCart) {
      setIsClicked(false);
      setCount(0);
    }
  }, [cartItems, name]);

    return(
        <section className="product">
            <figure className="img-fig">
                <img src={image.desktop} alt={name} />
                {isClicked ?(
                <button className="changeCartBtn">
                    <figure onClick={decrease} >
                        <img src={decrement} alt="decrement" />
                    </figure>
                    <span>{count}</span>
                    <figure onClick={increase} >
                        <img src={increment} alt="increment" />
                    </figure>
                </button>)
                :
                (<button onClick= {changeCartBtn}className="cart-btn">
                    <img className="cart-img" src={addToCartIcon} alt="add-to-cart" />
                    <span>Add to Cart</span>
                </button>
            )}
            </figure>
            <section className="prod-info">
                <p className="prod-category">{category}</p>
                <p className="prod-name">{name}</p>
                <p className="prod-price">${price.toFixed(2)}</p>
            </section>
        </section>
    )
}