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
const [amount, setAmount] = useState("");

let params = useParams();

useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
    .then((response) => {
        const json = response.data; 
        setCategory(json.category);
        setProducts(json.products);
        //console.log(json);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error)
    })
}, [params]);

/* const [categories, setCategories] = useState([]);

useEffect(() => {
axios.get(url + 'products/getcategories.php')
.then((response) => {
    const json = response.data;
    setCategories(json);
    //console.log(json);
}).catch (error => {
    alert(error.response === undefined ? error : error.response.data.error);
}) 
}, []); */

  return (
    <>
    <div className="productspage">
    <h1>Tuotevalikoima</h1>
    <h2>{category}</h2>
    <div className="products-container">
    <div className="row">
    <div className="col-lg-2 col-sm-12">
    <Sidenav url={url}/> 
{/*     <ul>
    {categories.map(category => (
        <li className="categorylist" key={category.id}>
            {<Link
            className='dropdown-item'
            to={'/products/' + category.id}>{category.name}
            </Link>}
        </li>
    ))}
    </ul> */}
    </div>
    <div className="col-lg-10 col-sm-12">
    <div className="row">
    {products.map(product => (
        <div className="col-sm-4 product-card" key={product.id} style={{backgroundImage:`url("${url}images/${product.image}")`}}>
            
           <Link to={'product/' + product.id}><h3>{product.name}</h3></Link>
            <div className="product-details">
                <span>{product.price}€</span><br/>
                <span>{product.percent ? product.percent + "%" : "" }</span>
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
