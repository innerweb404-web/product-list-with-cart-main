import Product from "./Product";

export default function Main({products, addToCart, updateQuantity, cartItems}){
    return(
        <main className="product-list">
            {products.map((product, index) =>(
                <Product 
                    key={index} 
                    {...product}
                    addToCart={addToCart}
                    updateQuantity={updateQuantity}
                    cartItems={cartItems}
                />
                    )
                )
            }
        </main>
    )
}