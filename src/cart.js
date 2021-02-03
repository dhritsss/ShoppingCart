import React from 'react';
import CartItem from './CartItem';
const Cart =(props)=>{
    

    
        const {products}=props;
        return(
        <div className="cart">
            {
            products.map((product)=>{
                // we can pretty much send everything as a prop
            return <CartItem 
                product={product} 
                key={product.id}
                increaseQuantity={props.increaseQuantity}
                decreaseQuantity={props.decreaseQuantity}
                deleteProduct={props.deleteProduct}

                />

            })
        

            }
        </div>
        );
        }

export default Cart;