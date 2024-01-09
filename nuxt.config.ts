// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ['@nuxtjs/tailwindcss'],   
 tailwindcss:{
  
 },
 app:{
    head:{
        title:"Nuxt Project",
        meta:[{
            name:'description',
            content: 'Everything about Nuxt 3'
        }],
        link:[
            {
                rel:'stylesheet',
                href:'https://fonts.googleapis.com/icon?family=Material+Icons'
            }
        ]
    }
 },
 runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
 }
})
/**
 * 1. tailwind css холбохдоо [npm install --save-dev @nuxtjs/tailwindcss] command ийг terminal aas ajiluulaad.
 * 2. nuxt.config.ts file iin defineNuxtConfig function dotor modules d ni  ['@nuxtjs/tailwindcss']  iig zaaj ugnu.
 */
 