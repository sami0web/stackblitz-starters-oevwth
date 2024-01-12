import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';





const initialState = {
  Pokemons: []
}


export const PokemonDataSlice = createSlice({
  name: 'PokemonData',
  initialState,
  reducers: {
    load: (state,action) => {
    //  state.Pokemons=[150]
      state.Pokemons.push(action.payload)
    },



    nextPage: (state,action) => {
        
    
    },
    prevPage: (state,action) => {
      
    
    },


    handleSelectionChange: (state,action) => {
      
    
    },

    RemoveItem: (state,action) => {
     
    
    },


  },
})


export const { load } = PokemonDataSlice.actions

export default PokemonDataSlice.reducer