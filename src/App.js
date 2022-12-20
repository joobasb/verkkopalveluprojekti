import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
import Registerpage from './pages/Registerpage';
import Sidenav from './components/Sidenav';
import Userpage from './pages/Userpage';
import Manage from './pages/Manage';
import ManageProducts from './components/ManageProducts';
import ManageCategories from './components/ManageCategories';

const URL = 'http://localhost/verkkokauppaback/';


function App() {

  const [cart, setCart] = useState([]);
  
  //kirjautumisasiat
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    axios.post(URL + "inc/rest_login.php", {}, {withCredentials:true})
    .then(resp => setLoggedUser(resp.data))
    .catch(e => console.log(e.message))
  }, []);

  function logout(){
    axios.post(URL+'inc/rest_logout.php', {}, {withCredentials:true})
      .then(resp => setLoggedUser(null))
      .catch(e=>console.log(e.message));
  }




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

    <Navbar url={URL} cart={cart} Login={Login} logout={logout} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order cart={cart} url={URL} removeFromCart={removeFromCart} updateAmount={updateAmount} empty={emptyCart} loggedUser={loggedUser} setLoggedUser={setLoggedUser} Login={Login}/>}/>
        {/* <Route path="products" element={<Products url={URL} addToCart={addToCart}/>} /> */}
        <Route path="products/:categoryId" element={<Products url={URL} addToCart={addToCart}/>} />
        <Route path="product/:productId" element={<Product url={URL} addToCart={addToCart}/>}/>
        <Route path="/registerpage" element={<Registerpage url={URL} setLoggedUser={setLoggedUser}/> }/>
        <Route path="search/:searchPhrase" element ={<Products url={URL} />} />
        <Route path="/userpage" element={<Userpage url={URL} loggedUser={setLoggedUser} uname={loggedUser} logout={logout}/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/manage" element={<Manage url={URL} />}/>
      </Routes>
    </div>
    <Footer />
{/*     <div>
      {loggedUser && <button type="button" onClick={logout}>kirjaudu ulos</button>}
      {loggedUser ? <UserPage uname={loggedUser}/> : <Login setLoggedUser={setLoggedUser} />}
    </div> */}
    </>
  );
}

function Login({setLoggedUser}){
  const [uname, setUname] = useState('');
  const [pw, setPw] = useState('');

  function logIn(){
    const formData = new FormData();
    formData.append("uname",uname);
    formData.append("pw",pw);

    axios.post(URL + "inc/rest_login.php", formData, {withCredentials:true})
      .then(response => setLoggedUser(response.data))
      .catch(e=>console.log("syy:" + e.message));
  }

  return (
    <form>
      <input type="text" className="login-field" placeholder="käyttäjätunnus" onChange={e=>setUname(e.target.value)}/>
      <input type="password" className="login-field" placeholder="salasana" onChange={e=>setPw(e.target.value)}/>
      <button type="button" className="login-btn" onClick={logIn}>kirjaudu</button>
    </form>
  )
}

/* function UserPage({uname, loggedUser, logout}){
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    axios.get(URL + 'inc/rest_user_info.php', {withCredentials:true})
    .then(resp=> setMessages(resp.data.messages))
    .catch(e=>console.log(e.message))
  }, []);

  return(
    <div>
      <h1>tervetuloa {uname}</h1>
      {loggedUser ? <button type="button" className="logout-btn" onClick={logout}>kirjaudu ulos</button> : <h3>tässä tiedot</h3>}
      <ul>
        {messages.map(msg => <li key={msg}>{msg}</li>)}
      </ul>
    </div>
  )
} */

/* function Register({setUser}){
  const [uname, setUname] = useState("");
  const [pw, setPw] = useState("");

  function register(e){
    const json = {uname, pw};

    axios.post(URL+'inc/rest_register.php', json, {withCredentials:true})
    .then(resp => setUser(uname))
    .catch(e=>console.log(e.message));
  }

  return (
    <div>
      <form>
        <label>
          käyttäjätunnus:
          <input type="text" onChange={e=>setUname(e.target.value)}></input>
        </label>
        <label>
          salasana:
          <input type="password" onChange={e=>setPw(e.target.value)}></input>
        </label>
        <button type="button" onClick={register}>rekisteröidy</button>
      </form>
    </div>
  )

} */

export default App;
