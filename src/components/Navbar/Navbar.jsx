import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils.js'

import KaustubhResume from './Kaustubh_resume_final.pdf';


const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const handleDownload = (e) => {
        
        e.preventDefault();
    
        
        console.log("Resume download initiated");
    
        
        const link = document.createElement("a");
        link.href = KaustubhResume;
        link.download = "Kaustubh_resume.pdf"; // Optional: set a custom file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
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
            <li><a href={KaustubhResume} onClick={handleDownload}>
      Resume
    </a></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
