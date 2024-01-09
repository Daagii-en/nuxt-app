export default defineEventHandler(async (event)=>{

    // //handle quety params
    // const { name } = useQuery(event)
 
    // //handle post data
    // const { age }= await useBody(event) 

    //api call with private key
    // const {data}= await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_64pyTkAbJSw7D6sxMvBwj500MvDfMF9zmEeUqueb')
    const {data}= await $fetch('https://api.currencyapi.com/v3/latest?currencies=GBP&apikey=cur_live_64pyTkAbJSw7D6sxMvBwj500MvDfMF9zmEeUqueb')
    return data
})
//