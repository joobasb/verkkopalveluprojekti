import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from './Product';
import Sidenav from '../components/Sidenav';

export default function Products({url,addToCart}) {

const [products, setProducts] = useState([]);
const [category, setCategory] = useState('');

let params = useParams();


useEffect(() => {
    let address = '';

    if (params.searchPhrase === undefined) {
        address = url + 'products/getproducts.php/' + params.categoryId;
    } else {
        address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
    .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
            setCategory(json.category);
            setProducts(json.products);
        } else {
            setCategory(params.searchPhrase);
            setProducts(json);
        }
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    })
}, [params]
)


/* useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
    .then((response) => {
        const json = response.data; 
        setCategory(json.category);
        setProducts(json.products);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
    })
}, [params]);

 */
  return (
    <>
    <div className="productspage">
    <h1>{category}</h1>
    <div className="products-container">
    <div className="row">
    <div className="col-lg-2 col-sm-12">
    <Sidenav url={url}/> 
    </div>
    <div className="col-lg-10 col-sm-12">
    <div className="row">
    {products.map(product => (
        <div className="col-sm-4 product-card" key={product.id} style={{backgroundImage:`url("${url}images/${product.image}")`}}>
            
           <Link to={'/product/' + product.id}><h3 className="product-card-header">{product.name}</h3>
            <div className="product-details">
                <span>panimo: {product.brewery}</span><br/>
                <span>hinta: {product.price}€</span><br/>
                <span>{product.percent ? "abv: " + product.percent +  "%" : "" }</span>
            </div></Link>
            <div className="add-cart-div">
                <button className="add-cart-btn" type="button" onClick={e => addToCart(product)}>Lisää koriin</button>
            </div>
        </div>
        
    ))}
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
