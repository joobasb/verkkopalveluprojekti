import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Userpage.css';

export default function Userpage({url, uname, loggedUser, logout}) {
  
  const [userInfo, setUserInfo] = useState([]);
    
  useEffect(() => {
    axios.get(url + 'inc/rest_user_info.php', {withCredentials:true})
    .then((resp) => {
      console.log(resp.data.userinfo);
      setUserInfo(resp.data.userinfo);})
    .catch(e=>console.log(e.message))
  }, []);

  return (
    <>
    {loggedUser ?
      <div className="userpage-container">
        <div className="row">
        
        <h1>tervetuloa {uname}</h1>
         <Link to="/"><button type="button" className="logout-btn" onClick={logout}>kirjaudu ulos</button></Link> :
        <div className="col-md-10 userinfo-column">
          <h3>Käyttäjätunnuksesi tiedot</h3>
          {userInfo.map(userinfo =>(
          <ul>
            <li key={userinfo.id}>
              <div className="userinfo">Nimi: {userinfo.firstname} {userinfo.lastname}</div>
            </li>
            <li key={userinfo.id}>
            <div className="userinfo">Katusoite: {userinfo.address}</div>
            </li>
            <li key={userinfo.id}>
            <div className="userinfo">Postitoimipaikka: {userinfo.city}</div>
            </li>
            <li key={userinfo.id}>
            <div className="userinfo">Postinumero: {userinfo.zip}</div>
            </li>
            <li key={userinfo.id}>
            <div className="userinfo">Sähköpostiosoite: {userinfo.username}</div>
            </li>

            </ul>
        ))}
        </div>
        </div>
      </div>
       : <h3>Et ole kirjautunut sisään</h3>}
    </>
  )
}

/* let params = useParams();

useEffect(() => {
  axios.get(url + 'products/getproduct.php/' + params.productId)
  .then((response) => {
    const json = response.data;
    setProduct(response.data);
  }).catch(error => {
    alert(error.response === undefined ? error : error.response.data.error);
  })
}, [params]) */