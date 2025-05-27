import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'

import Product from './Product'


const ProductDetail = () => {


  const {id} = useParams();

  const [product, setproduct] = useState({});


  const [relatedProducts, setrelatedProducts] = useState([])

  useEffect(() => {
    const filteredProduct=items.filter((product)=>{
      product.id==id
    })

    setproduct(filteredProduct[0])

    const relatedProducts=items.filter((product)=>{
      product.category===product.category
    })

    setrelatedProducts(relatedProducts)
    
  }, [id,product.category])
  

  return (

    <>

    <div className="container-con">
      <div className="img">
        {<img src={product.imgSrc} alt={title} />}
      </div>
      <div  className="text-center">
        
         <h1 className="card-title">{product.title}</h1>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary mx-3">
                    {product.price} ₹
                  </button>
                  <button className="btn btn-warning">Add To Cart</button>
      </div>

      <h1 className='text-center'>Related Products</h1>

      <Product items={relatedProducts}/>
    </div>
    
    
    </>
  )
}

export default ProductDetail