import React from 'react'
import Book from '../images/book.webp'
import Watch from '../images/watch.webp'
import Tv from '../images/tv.webp'
import Game from '../images/game.webp'
import './Product.css'
import { ProductItem } from './ProductItem'

export const Product = () => {
    return (
        <div className="product">
            <div className="product__row"> 
            <div className="product__option">
                <ProductItem 
                    id="1"
                    title="BOSH! Recipe Book"
                    price="7.99"
                    image={Book}
                />
            </div> 
            <div className="product__option">
                <ProductItem 
                    id="2"
                    title="Fitbit Versa 3 Smart Watch"
                    price="199.99"
                    image={Watch}
                />
            </div> 
            <div className="product__option">
                <ProductItem 
                    id="3"
                    title="Samsung 43 Inch Smart TV "
                    price="379.00"
                    image={Tv}
                />
            </div> 
            <div className="product__option">
                <ProductItem 
                    id="4"
                    title="God of war ps4"
                    price="15.99"
                    image={Game}
                />
            </div> 
                
                
                
                
            </div>
        </div>
    )
}


