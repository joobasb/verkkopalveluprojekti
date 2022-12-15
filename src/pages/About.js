import "./About.css";
import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>Janon sammuttaja vuodesta 2022</h2>
      </div>
      <div className="about-text">
        <p>
          Programmer's Brewing Company on tradenomiopisklijoiden perustama
          pienpanimo, <br></br>joka aloitti toimintansa vuonna 2022. <br></br>
          Tavoitteenamme on valmistaa laadukkaita oluita, erilaisiin makuihin.
          <br></br>valikoimastamme löytyy niin perinteisiä lageroluita, kuin
          eksoottisempia soureja.<br></br>Meille tärkeää on tuotteidemme
          opiskelijaystävällinen hinta, laadusta kuitenkaan tinkimättä.
        </p>
      </div>
      <div className="about-listheader">
        <h3>Yrityksemme on saanut seuraavat tunnustukset</h3>
        <div className="about-list">
          <ul>
            <li>Vuoden panimo 2022</li>
            <li>Vuoden tulokas 2022</li>
            <li>Vuoden ekoteko 2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
