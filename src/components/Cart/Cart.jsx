import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    //option 1: const {cart} = props.cart;
    //option 2: const cart = props;
/*     console.log(cart); */

    /* if(product.quantity === 0){
        product.quantity = 1;
    } */

    let totalPrice = 0;
    let totalShiping = 0;
    let quantity = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price * product.quantity;
        totalShiping =totalShiping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShiping + tax;



    return (
        <div className='cart'>
            <p className='order-summary'>Orders Summary</p>
            <p>Selected Items: {cart.length}</p>
            <p>total Price: ${totalPrice}</p>
            <p>total Shiping: {totalShiping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;