import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Manage from '../components/Manage';
import '../styles/Userpage.css';

export default function Userpage({url, uname, loggedUser, logout}) {
  
  const [userInfo, setUserInfo] = useState([]);
  const [isAdmin, setIsAdmin] = useState(null);
  
  
  useEffect(() => {
    axios.get(url + 'inc/rest_user_info.php', {withCredentials:true})
    .then((resp) => {
      setUserInfo(resp.data.userinfo)
      setIsAdmin(resp.data.userinfo[0].admin);})
    .catch(e=>console.log(e.message))
  }, []);

  return (
    <>
    
    {loggedUser ?
      <div className="userpage-container">
        <div className="row">
        <div className="col-md-8">
        <h1>tervetuloa {uname}</h1>
        </div>
        <div className="col-md-4">
         <Link to="/"><button type="button" className="logout-btn" onClick={logout}>kirjaudu ulos</button></Link>
         </div>
         </div>
        <div className="row">
        <div className="col-md-6 userinfo-column">
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
        <div className="col-md-6 orders-column">
          <h3>Tilauksesi</h3>
        </div>
        </div>
        </div>
       : <div><h3>Et ole kirjautunut sisään</h3></div>}
       <Manage url={url} isAdmin={isAdmin}/>
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