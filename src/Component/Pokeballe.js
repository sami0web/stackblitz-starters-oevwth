import React from 'react';
import React, { useState, useEffect } from 'react';

export default function Pokeballe(props) {

  
  useEffect(() => {
    Angle===360?setAngle(0):
    setTimeout(() => {
      setAngle((Angle) => Angle + 1);
    }, 10);
  });
  
  const [Angle, setAngle] = useState(0);
  

  

  return (  


    
  <div   className="d-inline   "><img className="mx-0"src="https://img.icons8.com/?size=512&id=45674&format=png" style={{width:'30px',  height:'30px',transform: 'rotate('+props.sens+''+Angle+'deg)'   }}       alt="..."/></div>

        
     )





}