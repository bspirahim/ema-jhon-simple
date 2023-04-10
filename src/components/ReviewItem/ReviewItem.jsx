import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveItemFromCart}) => {
    const {img, id, name, price, quantity} = product;
    return (
        <div className='review-item'>
             <img src={img} alt="" />
            <div className='review-detail'>
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Order Quantity: {quantity}</p>
            </div>
            <div>
                <button onClick={()=> handleRemoveItemFromCart(id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;