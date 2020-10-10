import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutItem.css'

export const CheckoutItem = ( {id, title, image, price} ) => {
    const [{}, dispatch] = useStateValue()

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }
    
    return (
        <div className="checkoutItem">
            <img src={image} alt=""/>
            
            <div key={id} className="checkoutProduct__info">
                <h4>{title}</h4>
                <p>£{price}</p>
                <button onClick={removeItem}>Remove from basket</button>
            </div>
        </div>
    )
}
