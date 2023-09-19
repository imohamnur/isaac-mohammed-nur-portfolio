import React from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  )
}

export default App