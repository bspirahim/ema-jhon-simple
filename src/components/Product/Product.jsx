import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='product-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;