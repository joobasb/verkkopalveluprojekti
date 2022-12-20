import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Login({setLoggedUser}){
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
        <label>username:</label>
        <input type="text" value={uname} onChange={e=>setUname(e.target.value)}/><br/>
        <label>password:</label>
        <input type="password" value={pw} onChange={e=>setPw(e.target.value)}/>
        <button type="button" onClick={logIn}>kirjaudu</button>
      </form>
    )
  }