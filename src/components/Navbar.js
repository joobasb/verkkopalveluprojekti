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

const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="white" viewBox="0 0 512 512"><path d="M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z"/></svg>


export default function Navbar({url, cart, Login, logout, loggedUser, setLoggedUser, UserPage}) {

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
        <NavLink to="/" className="navbar-brand" alt="koti"><span>{homeIcon}</span></NavLink>
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
                    <NavLink to="/about" className="nav-link"><span>meistä</span></NavLink>
                </li>
                <li className="nav-item dropdown">
                    <div className="dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                        <span>tuotevalikoima</span>
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
                    <NavLink to="/contact" className="nav-link"><span>ota yhteyttä</span></NavLink>
                </li>
        {/*         <li className="nav-item">
                    <NavLink to="/manage" className="nav-link"><span>manage</span></NavLink>
                </li> */}

                <li className="nav-item nav-cart">
                    <NavLink to="/order" className="nav-link"><span><Cart cart={cart}/></span></NavLink>
                </li>
                <li className="nav-item">
                    {/* <li class="dropdown-item"><Login /></li> */}
                    <div className="login-form">
                        {loggedUser ? <NavLink to="userpage"><span>käyttäjätili</span></NavLink> : <Login setLoggedUser={setLoggedUser} />}
                        
                    </div>
                </li>
                <li className="nav-item">
                        {!loggedUser ? <NavLink to="/Registerpage" className="nav-link"><span>rekisteröidy</span></NavLink> : ""}
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
