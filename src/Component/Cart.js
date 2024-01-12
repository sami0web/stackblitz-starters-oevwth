import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incrementQ,decrementQ,RemoveItem } from './Slice'


export default function cart() {
  
  

  const items = useSelector(state => state.shopping.Items);

  const dispatch = useDispatch()

  

  return (  

    <>

    <div className="container-fluid my-3  ">
        
    <table className="table  table-striped  text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Subtotal</th>
      <th scope="col"></th>
    </tr>
  </thead>
  
  <tbody>
  {items.map((Item,index)=>
    <tr>
      <th scope="row">{index}</th>
      <td><img src={Item.img}  style={{width:'30px',  height:'30px'}}/></td>
      <td>{Item.Name}</td>
      <td class="text-center"><i onClick ={()=>dispatch(decrementQ(index))} class="bi bi-caret-down"></i>      {Item.Quantiti}      <i onClick ={()=>dispatch(incrementQ(index))} class="bi bi-caret-up"></i></td>
      <td>${Item.Price}</td>
      <td>${Item.Price*Item.Quantiti}</td>
      <td><i   onClick ={()=>dispatch(RemoveItem(index))}  class="bi bi-x-lg"></i></td>  
      
    </tr>
)}
    <tr>
      <th scope="row"></th>
      <td colspan="4" class="text-center">Total   :</td>
      <td >${items.reduce((acc, Item) => acc+= Item.Price*Item.Quantiti
, 0)}</td>
    </tr>
  </tbody>
</table>



   
    </div>

    </>




        
     )





}