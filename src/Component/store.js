import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './Slice'
import PokemonDataReducer from './Slice2'
const store = configureStore({
  reducer:{
  
          shopping : shoppingCartReducer,
          datapok   : PokemonDataReducer,
        }


})

export default store

