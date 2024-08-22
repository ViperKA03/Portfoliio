import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils.js'

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
   <nav className={styles.navbar }>
    <a className={styles.title} href="/">Portfolio</a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} src= {menuOpen?getImageUrl('close.png'):getImageUrl("hamburger.png")} alt="menu-btn" 
        onClick={()=>setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contact</a></li>
            <li><a href="./Kaustubh_resume.pdf" download="Kaustubh_Resume">Resume</a></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
