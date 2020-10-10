import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useStateValue } from '../StateProvider'

export const Header = () => {
    const [{basket}, dispatch] = useStateValue()
    return (
        <nav className="header">
         <Link to={'/'}>
            <h1>Home Page</h1>
         </Link>

         <div className="basket">
             <Link to='/checkout'> 
                <h3>Basket</h3>
                <div className="header__basket"> 
                    <span className='header__amount'>{basket.length}</span>
                </div>
             </Link>
         </div>

        </nav>
    )
}
