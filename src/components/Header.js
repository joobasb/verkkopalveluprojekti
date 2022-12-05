import React from 'react'
import '../components/Header.css'

export default function Header() {
  return (
    <header>
    <h1 class='headerH1' >Programmer's Brewing Company</h1>
    <p class='headerP'>npx create-good-beer</p>
    <img src="images/logo.png" alt="..." class="logo" width="200" height="200"/>
    </header>

  )
}
