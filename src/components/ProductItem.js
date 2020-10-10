import React from 'react'
import { useStateValue } from '../StateProvider'
import './ProductItem.css'

export const ProductItem = ({id, title, price, image}) => {
    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {id, title, price, image}
        })
    }

    return (
        <div className="productItem">
            <div className="productItem__row">
                    <img src={image} alt=""/>  
                    <h3>{title}</h3>
                    <p>£{price}</p>
                    <button onClick={addToBasket}>Add to basket</button>
            </div>
        </div>

    )
}
