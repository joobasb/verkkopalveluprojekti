import React from 'react'
import axios from 'axios';

import ManageCategories from './ManageCategories'
import ManageProducts from './ManageProducts'

const URL = 'http://localhost/verkkokauppaback/';



export default function Manage({isAdmin, url}) {
  return (
    <>
    {isAdmin ?
   
      <div className="manage-container">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Ylläpito-osio</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tuotteiden ylläpito</button>
          <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Tuotekategorioiden ylläpito</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><div className="manage-products-container"><h3>Verkkokaupan ylläpito-osio</h3></div></div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><div><ManageProducts url={url} /></div></div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><div><ManageCategories url={url} /></div></div>
      </div>
      </div>
    
    : ''}
    </>
  )
}