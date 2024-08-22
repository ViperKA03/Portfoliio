import React,{useState} from 'react'
import  styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
 import { getImageUrl } from './utils.js'
import Hero from './components/hero/Hero.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'



function App() {
  return(
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App
