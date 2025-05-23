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
    
    
    </>
  )
}

export default Navbar