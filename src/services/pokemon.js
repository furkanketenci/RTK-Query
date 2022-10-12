// createApi= >  Bir dizi uç noktadan nasıl veri alınacağını açıklar.
// fetchBaseQuery =>  İstekleri basitleştirmeyi amaçlayan küçük bir sarmalayıcıdır.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Temel URL ve beklenen uç noktalar kullanarak bir hizmet tanımlayın
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi', // names mantığı ile aynı 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (name) => {
            console.log(name)
            return `pokemon/${name}`
        },

      }),

    }),
  })


// Export ederken Başına "use" sonuna Query gelmelidir. Kullanacağımız yerde İmport etmemiz gerekiyor.
export const { useGetPokemonByNameQuery } = pokemonApi