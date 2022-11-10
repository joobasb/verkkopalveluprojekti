import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Navbar.css"
import ThemeChanger from './ThemeChanger'

export default function Navbar() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand" alt="koti"><span>H o m e</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <div className="nav-search">
                        <input type="search" class="form-control rounded" placeholder="S e a r c h" aria-label="Search" aria-describedby="search-addon" />
                    </div>
                    </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link"><span>m e i s t ä</span></Link>
                </li>
                <li className="nav-item dropdown">
                <div className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>t u o t e v a l i k o i m a &nbsp;</span>
                </a>

                <ul className="dropdown-menu product-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link to="/products" className="nav-link"><span>k a i k k i</span></Link></li>
                    <li><Link to="/*" className="nav-link"><span>o l u e t</span></Link></li>
                    <li><Link to="/*" className="nav-link"><span>o h e i s t u o t t e e t</span></Link></li>
                </ul>
                </div>
                </li>
 
                <li className="nav-item">
                    <Link to="/contact" className="nav-link"><span>o t a &nbsp; y h t e y t t ä</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" className="nav-link"><span>o s t o s k o r i &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4" viewBox="0 1 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg></span></Link>
                </li>
                <li className="nav-item dropdown">
  
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
                </li>
                <li className="nav-item">
                    <span><ThemeChanger /></span>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}
