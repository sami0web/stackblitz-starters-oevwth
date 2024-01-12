import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { load } from './Slice2'


export default function FetchData () {

const [PokemonsData, setPokemonsData] = useState([]);
const dispatch = useDispatch()
/*const loaddata=()=> dispatch(load("5")) */
//loaddata(   )
/*useEffect(() => {
  fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/1')
    .then(response => response.json())
    .then(data => setPokemonsData(data));
   

}, []);



if(PokemonsData.length){

  load(   )
}*/



}