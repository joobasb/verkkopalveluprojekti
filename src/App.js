import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import Product from './pages/Product';
import Products from './pages/Products';
import Sidenav from './components/Sidenav';

const URL = 'http://localhost/verkkokauppaback/';


function App() {

  const [cart, setCart] = useState([]);


  //lukee säilötyn localstorage-ostoskorin vaikka sivu päivitetään
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function emptyCart(cart) {
      setCart([]);
      localStorage.removeItem('cart');
  }

  //tuotteen lisääminen koriin
  function addToCart(product){
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id ===product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    } else {
      product['amount'] = 1;
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
    console.log(newCart);
    }}
  

  //tuotteen poistaminen ostoskorista
  function removeFromCart(product){
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved)
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }


  //ostoskorin määrän päivittäminen
  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart], {[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
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
        <Route path="/order" element={<Order cart={cart} url={URL} removeFromCart={removeFromCart} updateAmount={updateAmount} empty={emptyCart}/>}/>
        {/* <Route path="products" element={<Products url={URL} addToCart={addToCart}/>} /> */}
        <Route path="products/:categoryId" element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path="product/:productId" element={<Product url={URL} addToCart={addToCart}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
