import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
// pokemon.js içerisindeki pokemonApi
import { pokemonApi } from './services/pokemon' 


export const store = configureStore({
    reducer: {
      // reducerPath'ın adı pokemonApi'dir.  pokemonApi.reducer => "?"
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
   
    // ?!!
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  })
  

  setupListeners(store.dispatch)