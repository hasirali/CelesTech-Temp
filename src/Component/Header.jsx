import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {HashLink} from 'react-router-hash-link'
import '../Styles/media.scss'

const Header = () => {
  return (
    <nav>
        <h1>CelesTech</h1>
        <main>
          <HashLink to={'/#homee'}>Home</HashLink>
          <Link to={'/contact'}>Contact</Link>
          <HashLink to={'/#about'}>About</HashLink>
          <HashLink to={'/#brands'}>Brands</HashLink>
          <Link to={'/services'}>Services</Link>

        </main>
    </nav>
  )
}

export default Header