var axios = require("axios");

// if (process.env.NODE_ENV == 'production') {

// }

export default (from, to) => {
    console.log(from, to)
    console.log(process.env)
    console.log(process.env.API_KEY)



const sample_response = `{"base":"USD","last_update":"2019-01-12T06:04:42.769Z","rates":{"EUR":0.8721736499},"status":200,"target":"EUR"}`
return sample_response;


}