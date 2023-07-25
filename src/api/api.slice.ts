import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api'}),
    
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: (children) => ({
        url : `/documents?search=${children}`,
        method : "GET"
      })
    }),
    getCountries: builder.query({
      query: () => ({
        url : `/countries`,
        method : "GET"
      })
    }),
    getCountriesData: builder.query({
      query: (country) => ({
        url : `/countriesData?search=${country}`,
        method : "GET"
      })
    }),
  }),
  keepUnusedDataFor: 300, // Tiempo en segundos para mantener los datos en caché sin usar
});


export const { useGetDocumentsQuery,useGetCountriesQuery,useGetCountriesDataQuery } = apiSlice;
