import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cart from './Cart'
import "../components/Navbar.css"
import ThemeChanger from './ThemeChanger'

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" background-color="white" color="black" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>;

export default function Navbar({url, cart}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
    axios.get(url + 'products/getcategories.php')
    .then((response) => {
        const json = response.data;
        setCategories(json);
        //console.log(json);
    }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
    }) 
    }, [])

  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" alt="koti"><span>H o m e</span></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <div className="nav-search input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon" type="submit">
                        {searchIcon}
                        </span>
                    </div>
                    </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link"><span>m e i s t ä</span></NavLink>
                </li>
                <li className="nav-item dropdown">
                <div className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <span>t u o t e v a l i k o i m a &nbsp;</span>
                </a>

                <ul className="dropdown-menu product-menu" aria-labelledby="dropdownMenuClickableInside">
                    <li><NavLink to="/products" className="nav-link"><span>k a i k k i</span></NavLink></li>
                    <li><NavLink to="/*" className="nav-link"><span>u u t u u d e t</span></NavLink></li>
                    <a className="nav-link beer-cat dropdown-toggle" href="#" role="button"  id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <span>t u o t e k a t e g o r i a t &nbsp;</span>
                    </a>
                    <ul className="dropdown-menu sub-categories"aria-labelledby="dropdownMenuClickableInside" data-bs-popper="relative">
                        {categories.map(category => (
                            <li className="categorylist" key={category.id}>
                                {<NavLink
                                className='dropdown-item'
                                to={'/products/' + category.id}>{category.name}
                                </NavLink>}
                            </li>
                        ))}
                        </ul>

                        {/*KOVAKOODATTU KATEGORIALISTA <li><Link to="/*" className="nav-link"><span>v a a l e a t</span></Link></li>
                        <li><Link to="/*" className="nav-link"><span>t u m m a t</span></Link></li>
                        <li><Link to="/*" className="nav-link"><span>e r i k o i s</span></Link></li> */}
                    
                </ul>
                </div>
                </li>
 
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link"><span>o t a &nbsp; y h t e y t t ä</span></NavLink>
                </li>
                <li className="nav-item nav-cart">
                    <Cart cart={cart}/>
                </li>
{/* kirjautuminen       <li className="nav-item dropdown">
  
                        <form className="nav-link loginform dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>k i r j a u d u &nbsp;</span>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li>
                            <input type="text" placeholder="k ä y t t ä j ä t u n n u s"></input>
                            </li>
                            <li>
                            <input type="text" placeholder="s a l a s a n a"></input>
                            </li>
                            <li>
                            <button className="login-btn" onSubmit="">k i r j a u d u</button>
                            </li>
                        </ul>
                        </form>
                </li> */}
                <li className="nav-item">
                    <span><ThemeChanger /></span>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}
