import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
const Swal = require('sweetalert2')




const initialState = {
  Items: []
}


export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    AddItem: (state,action) => {
      
      let Item=state.Items.find((element)=>element.Id===action.payload.Id )
     
      if(Item){

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Item has been Updated',
          showConfirmButton: false,
          timer: 1500
        })


    
        Item.Quantiti +=1
      
      

      }

      else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Item has been Saved',
          showConfirmButton: false,
          timer: 1500
        })
          
        state.Items.push(action.payload)
    
          }


    },

    RemoveItem: (state,action) => {
      state.Items.splice(action.payload, 1)  
    
    },

    incrementQ: (state,action) => {
     
       
     
      state.Items[action.payload].Quantiti++
    
    
    },


    decrementQ: (state,action) => {
   
      state.Items[action.payload].Quantiti==1?  state.Items.splice(action.payload, 1)      :state.Items[action.payload].Quantiti--
    
    },



    
    
    
    
  },
})


export const { AddItem, RemoveItem,incrementQ,decrementQ } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer