import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Product({url, addToCart}) {
  const [product, setProduct] = useState('');

  let params = useParams();

  useEffect(() => {
    axios.get(url + 'products/getproduct.php/' + params.productId)
    .then((response) => {
      const json = response.data;
      setProduct(response.data);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    })
  }, [params])

  return (
    <div className="product-page-container">
    <div className="row">
    <div className="col-lg-6 productpage-info">
      <h3>{product.name}</h3>
      <p>
        {product.description}
      </p>
      <p>Panimo: {product.brewery}</p>
      <p>ABV: {product.percent ? product.percent + "%" : "" }</p>
      <p>Hinta: {product.price}€</p>
     
      <div key={product.id}>
        <button className="primary-btn" type="button" onClick={e => addToCart(product)}>Lisää koriin</button>
      </div>
    </div>
    <div className="col-lg-6 productpage-item">
      { product.image ?
        <img style={{width: '450px', height:"auto"}} src={url + 'images/' + product?.image} alt="tuotekuva by crayion.com"/>:
        <img style={{width: '450px'}} src={url + 'images/placeholder.png'} />
      }
  
      </div>
      </div>
    </div>
  )
}
