import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
const Textttt = () => {
    const [text]=useTypewriter({
        words: ['Developer','Designer','Coder'],
        loop:{},
        typeSpeed:10
      });
     
      return (
      <h1 style={{margin: '50px'}}>
        I'm a  
        <span style={{fontWeight:'bold',color:"yellow",margin: '10px',fontSize:'100'}}>
          {text}
    
        </span> 
            <Cursor/>
    
      </h1>
      );
}

export default Textttt
