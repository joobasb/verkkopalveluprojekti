import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Sidenav({url}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            setCategories(json);
        }).catch (error => {
            alert(error.response === undefined ? error : error.response.data.error);
        }) 
        }, []);
        
  return (
    <div className="sidenav">    
    <ul>
    {categories.map(category => (
        <li className="categorylist" key={category.id}>
            {<Link
            className='dropdown-item'
            to={'/products/' + category.id}>{category.name}
            </Link>}
        </li>
    ))}
    </ul>
    </div>
  )
}
