import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cart from './Cart'
import "../styles/Navbar.css"
import ThemeChanger from './ThemeChanger'

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" background-color="white" color="black" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>;

export default function Navbar({url, cart}) {

    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

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


    function executeSearch(e) {
        if (e.charCode === 13) {
            e.preventDefault();
            navigate('/search/' + search);
            console.log(e);
        }
    }

    function clickSearch(e){
        e.preventDefault();
        navigate('/search/' + search);
    }

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
                    <form className="search-form">
                        <input className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={(e) => executeSearch(e)} onSubmit={(e) => executeSearch(e)}  type="search" placeholder="Etsi tuotteita" aria-label="Search" aria-describedby="search-addon" />
                        <button className="search-btn" onClick={clickSearch}>{searchIcon}</button>
                    </form>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link"><span>m e i s t ä</span></NavLink>
                </li>
                <li className="nav-item dropdown">
                    <div className="dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <span>t u o t e v a l i k o i m a &nbsp;</span>
                    </a>
                
                    <ul className="dropdown-menu product-menu" aria-labelledby="dropdownMenu">
                        
                            {categories.map(category => (
                                <li className="categorylist" key={category.id}>
                                    {<NavLink
                                    className='dropdown-item'
                                    to={'/products/' + category.id}>{category.name}
                                    </NavLink>}
                                </li>
                            ))}
                        </ul>    
                    </div>
                </li>
 
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link"><span>o t a &nbsp; y h t e y t t ä</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/manage" className="nav-link"><span>manage</span></NavLink>
                </li>
                <li className="nav-item nav-cart">
                    <NavLink to="/order" className="nav-link"><span><Cart cart={cart}/></span></NavLink>
                    
                </li>
                <li className="nav-item">
                    <ThemeChanger />
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}
