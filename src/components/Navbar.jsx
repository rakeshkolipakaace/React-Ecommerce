import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <header className='sticky-top'>
        <div className='nav-bar'>
            <Link to={'/'}className='brand'>E-Cart</Link>
            <div className='search-bar'>
                <input type="text" placeholder='Search Products'></input>
            </div>

            <Link to={'/cart'}className='cart'>Cart</Link>

        </div>
    </header>

    <div className="nav-bar-wrapper">
        <div className="items">Filter by {"->"}</div>
        <div className="items">No Filter</div>
        <div className="items">Mobiles</div>
        <div className="items">Laptops</div>
        <div className="items">Tablets</div>
        <div className="items">{">=2999"}</div>
        <div className="items">{">=4999"}</div>
        <div className="items">{">=6999"}</div>
        <div className="items">{">=8999"}</div>
        
    </div>
    
    
    </>
  )
}

export default Navbar