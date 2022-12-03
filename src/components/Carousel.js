import React from 'react'
import '../components/Carousel.css'

export default function Carousel() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <img src="images/image1.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="images/image2.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="images/image3.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="container marketing">

        <div class="row"> 
          <div class="col-lg-4">
          <img src="images/image1.jpg" alt="..." class="rounded-circle border border-light" width="200" height="200"/>      
          <p><a class="btn btn-secondary" href="#">Oluet &raquo;</a></p>
          </div>
          <div class="col-lg-4">
          <img src="images/image2.jpg" alt="..." class="rounded-circle border border-light" width="200" height="200"/>      
            <p><a class="btn btn-secondary" href="#">Oheistuotteet &raquo;</a></p>
          </div>
          <div class="col-lg-4">
          <img src="images/image3.jpg" alt="..." class="rounded-circle border border-light" width="200" height="200"/>      
            <p><a class="btn btn-secondary" href="#">jotain &raquo;</a></p>
          </div>
        </div>
        </div>
      </div>
  </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </>
  )
}
