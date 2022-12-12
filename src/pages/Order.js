import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createRef } from 'react';
import uuid from 'react-uuid';


export default function Order({cart, removeFromCart, updateAmount, url, empty}) {

  const [inputs, ] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [finished, setFinished] = useState(false);
  
  useEffect(() => {
    for (let i = 0; i<cart.length;i++){
      inputs[i] = React.createRef();
    }
  }, [cart.length])


  //palauttaa fokuksen ostoskorin määräkenttään muuttaessa arvoa
  useEffect(()=> {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null){
      inputs[inputIndex].current.focus();
    }
  }, [cart, inputs, inputIndex])

  //tilauksen lähettäminen
  function order(e){
    e.preventDefault();

    //muuta json-muotoon
    const json = JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      address: address,
      zip: zip,
      city: city,
      email: email,
      cart: cart,
    });
    axios.post(url + 'order/save.php', json, {
      headers: {
        'Accept': 'application/json',
        'Content-type' : 'application/json'
      }
    })
    .then(() => {
      empty();
      setFinished(true);
      console.log(json);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });

  }

  function changeAmount(e,product,index){
    updateAmount(e.target.value,product);
    setInputIndex(index);
  }

  let sum = 0;
  if (finished === false) { 
  return (
    <div className="order-container">
      <h3>Ostoskori</h3>
      <table className="table">
        <tbody>
          {cart.map((product,index) => {
            sum+=parseFloat(product.price)*parseInt(product.amount);
            return (
              <tr key={uuid()}>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>
                  <input ref={inputs[index]} type="number" min="0" style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)}/>
                </td>
                <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
              </tr>
            )
          })}
          <tr key={uuid()}>
            <td></td>
            <td>{sum ? sum.toFixed(2) : 0 } €</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <button className="empty-cart-btn" onClick={empty}>tyhjennä ostoskori</button>
      </table>
      {cart.length > 0 &&
      <>
        <h3>Tilaajan tiedot</h3>
        <form onSubmit={order}>
          <div className="form-group">
            <label>Etunimi</label>
            <input className="form-control" onChange={e=>setFirstName(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>Sukunimi</label>
            <input className="form-control" onChange={e=>setLastName(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>Sähköposti</label>
            <input className="form-control" type="email" onChange={e=>setEmail(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>Osoite</label>
            <input className="form-control" onChange={e=>setAddress(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>Postinumero</label>
            <input className="form-control" type="number" min="0" max="99999" onChange={e=>setZip(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label>Kaupunki</label>
            <input className="form-control" onChange={e=>setCity(e.target.value)} required/>
          </div>
          <div className="order-button">
            <button>Tilaa</button>
          </div>
        </form>
      
      </>
      }
    </div>
  )
} else {
  return (<h3>kiitos tilauksesta</h3>)
}
}
