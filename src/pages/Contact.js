import '../styles/Contact.css';
import React from 'react';
import { useState } from 'react';

export default function Contact() {
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [message, setMessage] = useState("")
  const [orderNumber, setOrderNumber] = useState("") 

  //lähetä tiedot konsoliin ja tyhjää kentät, testin vuoksi.
  const send = (e) => {
    e.preventDefault();
    console.log (`Name: ${inputName} ` + `Email: ${inputEmail} ` + `Order number: ${orderNumber} ` + `Message: ${message}`);
    setInputEmail("");
    setInputName("");
    setOrderNumber("");
    setMessage("");
    alert("Viestisi on lähetetty!");
    
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <h1>OTA YHTEYTTÄ</h1>
            <div class="col-md-8">
              <form onSubmit={send}>
                <div className="form">
                  <label>Etu- ja Sukunimi</label>
                  <input type="text" class="form-control" id="full-name" placeholder="Esko Esimerkki" value={inputName} onChange={e => setInputName(e.target.value)} required/>
                </div>
                <div>
                  <label>Sähköposti</label>
                  <input type="email" class="form-control" id="email-address" placeholder="esko@esimerkki.fi" value={inputEmail} onChange={e => setInputEmail(e.target.value)} required/>
                </div>
                <div>
                  <label>Tilausnumero</label>
                  <input type="text" class="form-control" id="order-number" placeholder="Tämän voi jättää tyhjäksi mikäli viestisi ei koske tilausta" value={orderNumber} onChange={e => setOrderNumber(e.target.value)}/>
                </div>
                <div>
                  <label>Viesti</label>
                  <textarea class="form-control" id="message-field" placeholder="Esko pitää oluestanne!" rows="5" value={message} onChange={e => setMessage(e.target.value)} required ></textarea>
                </div>
                <div className="button-send">
                  <button>Lähetä</button>
                </div>
              </form>
            </div>
            <div id="info-text" class="col-md-4">
              <p>Jos sinulla on kysyttävää tilaukseesi liittyen, tai haluat antaa
               meille palautetta ja auttaa meitä parantamaan toimintaamme, voit tehdä sen ohessa olevalla lomakkeella.
              </p>
              <p>Jos viestisi liittyy tilaukseesi, täytäthän tilausnumeron sille 
                tarkoitettuun kenttään, vastaamme viestiisi kahden arkipäivän kuluessa!
              </p>
            </div>
        </div>
      </div>
    </>
  )
}
