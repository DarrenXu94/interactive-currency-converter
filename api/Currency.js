var axios = require("axios");
let key; 

if (process.env.NODE_ENV == 'production') {
    key = process.env.API_KEY;
} else {
    key = require('./Private');
}

export default async (from, to) => {
    console.log(from, to)
    let request_body = { method: 'GET',
    url: `https://api.currencystack.io/currency?base=${from}&target=${to}`,
    qs: { apikey: key },
    headers: 
    { 'postman-token': '0010f3d4-76e5-d044-31f3-42ecc4260371',
    'cache-control': 'no-cache' } }

    let res = await axios(request_body)
    console.log(res)

const sample_response = `{"base":"USD","last_update":"2019-01-12T06:04:42.769Z","rates":{"EUR":0.8721736499},"status":200,"target":"EUR"}`
return sample_response;


}