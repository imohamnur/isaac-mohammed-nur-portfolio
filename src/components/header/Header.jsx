import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Isaacisawesome.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Isaac Mohammed Nur</h1>
        <h5 className="text-light">Computer Science Major at the University of Minnesota - Twin Cities</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header