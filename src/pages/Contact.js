import React from 'react'
import { useState } from 'react'

export default function Contact() {
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [message, setMessage] = useState("")

  const send = (e) => {
    e.preventDefault();
    alert(`Name: ${inputName} ` + `Email: ${inputEmail} `+ `Message: ${message}`);
  }

  return (
    <div>
      <h1>OTA YHTEYTTÄ</h1>
      <form onSubmit={send}>
        <div className="form">
          <label>Etu- ja Sukunimi</label>
          <input type="text" class="form-control" placeholder="Syötä koko nimesi" value={inputName} onChange={e => setInputName(e.target.value)}/>
        </div>
        <div>
          <label>Sähköposti</label>
          <input type="email" class="form-control" placeholder="Syötä sähköpostiosoitteesi" value={inputEmail} onChange={e => setInputEmail(e.target.value)}/>
        </div>
        <div>
          <label>Viesti</label>
          <textarea class="form-control" placeholder="Kirjoita viestisi" rows="5" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <button>Lähetä</button>
      </form>
    </div>
  )
}
