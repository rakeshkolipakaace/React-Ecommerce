import React from 'react'

const Navbar = () => {
  return (
    <>

    <header>
        <div className='nav-bar'>
            <div className='brand'>E-Cart</div>
            <div className='search-bar'>
                <input type="text" placeholder='Search Products'></input>
            </div>

            <div className='cart'>Cart</div>

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