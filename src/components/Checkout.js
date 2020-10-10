import React from 'react'
import { useStateValue } from '../StateProvider'
import { CheckoutItem } from './CheckoutItem'
import './Checkout.css'

export const Checkout = () => {
    const [{basket}] = useStateValue()

    const amounts = basket.map(item => parseFloat(item.price))

    const total = basket.length > 0 ? (amounts).reduce((acc, item) => acc += item).toFixed(2)
                 : 0

    return (
        <div className="checkout">
            <div className="checkout__products">

                {basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                    </div>
                ) : (
                <div> 
                    <h2>Shopping Basket total <span>£{total}</span></h2>

                    {basket.map(item => (
                        <CheckoutItem 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
                )}
          </div>
        </div>
    )
}
