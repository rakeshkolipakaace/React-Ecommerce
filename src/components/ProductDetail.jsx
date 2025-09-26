import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'

import Product from './Product'


const ProductDetail = () => {


  const {id} = useParams();

  const [product, setproduct] = useState({});


  const [relatedProducts, setrelatedProducts] = useState([])

  useEffect(() => {
    const filteredProduct = items.filter((p)=> p.id == id);

    setproduct(filteredProduct[0])

    const relatedProducts = items.filter((p)=> p.category === filteredProduct[0]?.category && p.id != filteredProduct[0]?.id);

    setrelatedProducts(relatedProducts)
    
  }, [id])
  

  return (

    <>

    <div className="container-con">
      <div className="img">
        {product?.imgSrc && <img src={product.imgSrc} alt={product.title || 'product'} />}
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