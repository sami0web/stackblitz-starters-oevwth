import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import { AddItem } from './Slice'





export default function Card(props) {
  let Price=props.stats.attack*2+props.stats.defense*3+props.stats.speed;
  const{Id ,Name,img} = props
  const Quantiti=1;
  const add=()=> dispatch(AddItem({Id ,Name,img,Quantiti,Price}))

  const dispatch = useDispatch()
  return (
   
     
     <div className="card ">
  <img src={img} className="PokImg" alt="..."/>
  <div className="card-body Larger shadow
">
    <h5 className="card-title">{Name}</h5>
    <p className="card-text">
    HP: {props.stats.HP}<br/>
    attack: {props.stats.attack}<br/>
    defense: {props.stats.defense}<br/>
    special_attack: {props.stats.special_attack}<br/>
    special_defense:{props.stats.special_defense}<br/>
    speed: {props.stats.speed}<br/>
</p>
  <h6>Price: ${Price}</h6>
  
  
    <button className="btn btn-primary  " onClick ={()=>add(   )}  >add to cart    <i class="bi bi-cart"></i></button>
  </div>
</div>

     
 
  );
}