import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import Sidenav from './components/Sidenav';

const URL = 'http://localhost/testi1/';


function App() {

  const [cart, setCart] = useState([]);
  //tuotteen lisääminen koriin
  function addToCart(product){
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));

  }

  


  return (
    <>
    <Header />
    <Navbar url={URL} cart={cart} />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product url={URL}/>} />
        <Route path="/products/:categoryId" element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
