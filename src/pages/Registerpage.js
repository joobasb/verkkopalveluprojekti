import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registerpage.css'



export default function Registerpage({url, loggedUser}){

    const [user, setUser] = useState(null);
    const [uname, setUname] = useState("");
    const [pw, setPw] = useState("");
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [finished, setFinished] = useState(false);
    
  
    function register(e){
      const json = {uname, pw, firstname, lastname, address, zip, city};

      axios.post(url+'inc/rest_register.php', json, {withCredentials:true})
      .then(() => {
        
        setUser(uname);
        setFinished(true);
        e.preventDefault();
      })
      .catch(e=>console.log(e.message));
    }
    if (finished === false && !loggedUser)
     { return (
        <>


        <div className="row register-container">
            <h3>Rekisteröidy asiakkaaksi</h3>
            <div className="col-md-6">
                <form className="register-form" onSubmit={register}>
                    <label>Sähköpostiosoite (käyttäjätunnus)</label>
                    <input className="form-control register-form-input" type="email" onChange={e=>setUname(e.target.value)} required/>
                    <label>Salasana</label>
                    <input className="form-control register-form-input" type="password" onChange={e=>setPw(e.target.value)}required/>
                    <label>Etunimi</label>
                    <input className="form-control register-form-input" onChange={e=>setFirstName(e.target.value)} required/>
                    <label>Sukunimi</label>
                    <input className="form-control register-form-input" onChange={e=>setLastName(e.target.value)} required/>
                    <label>Osoite</label>
                    <input className="form-control register-form-input" onChange={e=>setAddress(e.target.value)} required/>
                    <label>Postinumero</label>
                    <input className="form-control register-form-input" type="number" min="0" max="99999" onChange={e=>setZip(e.target.value)} required/>
                    <label>Kaupunki</label>
                    <input className="form-control register-form-input" onChange={e=>setCity(e.target.value)} required/>
                    <button type="submit" >rekisteröidy</button>
                </form>
            </div>
        <div className="col-md-6 img-col">
            <img className="register-img" src="images/img_craiyon_154044_registering_for_beer_realistic.png"></img>
        </div>
        </div>
        </>
    )} else if (loggedUser) {
        return (<h3>Rekisteröityminen onnistui! &nbsp; <Link to="/userpage" style={{textDecoration:"underline", color:"black"}}>Siirry käyttäjätilillesi</Link></h3>)
    }
}