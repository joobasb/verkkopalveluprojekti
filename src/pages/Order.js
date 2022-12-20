import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createRef } from 'react';
import uuid from 'react-uuid';

export default function Order({cart, removeFromCart, updateAmount, url, empty, loggedUser, setLoggedUser, Login}) {

  const [inputs, ] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

/*   const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState(''); */
  const [finished, setFinished] = useState(false);
  
  const [userInfo, setUserInfo] = useState([]);
    
  useEffect(() => {
    axios.get(url + 'inc/rest_user_info.php', {withCredentials:true})
    .then((resp) => {
      setUserInfo(resp.data.userinfo)
      console.log(resp.data.userinfo[0].id);})
    .catch(e=>console.log(e.message))
  }, []);


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
/*       firstname: firstname,
      lastname: lastname,
      address: address,
      zip: zip,
      city: city, */
      id: userInfo[0].id,
      cart: cart,
    });
    console.log(json);
    axios.post(url + 'order/save.php', json, {
      headers: {
        'Accept': 'application/json',
        'Content-type' : 'application/json'
      }
    })
    .then(() => {
      //tyhjennä tilaus lähetyksen jälkeen
      empty();
      setFinished(true);
      console.log(json);
    }).catch(error => {
      alert(error.response === undefined ? error : error.response.data.error);
    });

  }
  //tuotteen määrän muuttaminen
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
      {
      !loggedUser?
      
      <div><h3> ostoskorisi on tyhjä</h3>
        <p>Kirjaudu sisään tilataksesi</p><br/><Login setLoggedUser={setLoggedUser}/></div>:
        cart.length === 0 && loggedUser ?
        <h3> ostoskorisi on tyhjä</h3>:
      
      cart.length > 0 && loggedUser ? 
      <form onSubmit={order}>
      {userInfo.map(userinfo =>(
        <>
        <h3>Tilaajan tiedot</h3>
        
          <div className="form-group">
            <label>Etunimi</label>
            <input className="form-control" value={userinfo.firstname} />
          </div>
          <div className="form-group">
            <label>Sukunimi</label>
            <input className="form-control" value={userinfo.lastname} required/>
          </div>
          <div className="form-group">
            <label>Osoite</label>
            <input className="form-control" value={userinfo.address} required/>
          </div>
          <div className="form-group">
            <label>Postinumero</label>
            <input className="form-control" value={userinfo.zip} type="number" min="0" max="99999" required/>
          </div>
          <div className="form-group">
            <label>Kaupunki</label>
            <input className="form-control" value={userinfo.city} required/>
          </div>
          <div className="order-button">
            <button>Tilaa</button>
          </div>
        
        </>
      ))}
      </form>


     : <div>nothing</div>}


    </div>
  )
} else {
  return (<h3>kiitos tilauksesta</h3>)
}
}
