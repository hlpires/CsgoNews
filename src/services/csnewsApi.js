import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 
const csnewsApiHeaders= {
    'X-RapidAPI-Host': 'csgo-matches-and-tournaments.p.rapidapi.com',
    'X-RapidAPI-Key': 'b810cbd18bmsh9be1172c850c4d8p100877jsn2839fe298a4c'
}
const baseUrl = 'https://csgo-matches-and-tournaments.p.rapidapi.com/matches'

const createRequest =(url) => ({url,headers: csnewsApiHeaders})

export const csnewsApi = createApi({
    reducerPath:'csnewsApi',
    baseQuery: fetchBaseQuery ({baseUrl}),
    endpoints:(builder) => ({
        getNews: builder.query({
        query:() => createRequest('')
    })
  }) 
})


export const {
    useGetNewsQuery,
} = csnewsApi;