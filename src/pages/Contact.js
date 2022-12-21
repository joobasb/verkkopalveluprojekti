import '../styles/Contact.css';
import React from 'react';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
//npm i @emailjs/browser

  export default function Contact() {
    function send(e) {
      e.preventDefault();
      emailjs.sendForm('service_zyvft4u', 'template_tl87rtk', e.target, 'eUtIOYgzc_DC4wgjp')
        .then((result) => {
            alert('Kiitos viestistäsi!');
        }, (error) => {
            alert('Tapahtui virhe: ' + error.text + ' Yritä myöhemmin uudelleen!');
        });
        e.target.reset()
      }
    
  return (
    <>
      <div class="container">
        <div class="row">
          <h1>OTA YHTEYTTÄ</h1>
          <p>* Merkityt kentät ovat pakollisia</p>
            <div class="col-md-8">
              <form onSubmit={send}>
                <div>
                  <label>Etu- ja Sukunimi</label>
                  <input type="text" class="form-control" id="full-name" placeholder="*" name="name" required/>
                </div>
                <div>
                  <label>Sähköposti</label>
                  <input type="email" class="form-control" id="email-address" placeholder="*" name="email" required/>
                </div>
                <div>
                  <label>Tilausnumero</label>
                  <input type="number" class="form-control" id="order-number" placeholder="" name="subject"/>
                </div>
                <div>
                  <label>Viesti</label>
                  <textarea class="form-control" id="message-field" placeholder="*" rows="5" name="message" required></textarea>
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
