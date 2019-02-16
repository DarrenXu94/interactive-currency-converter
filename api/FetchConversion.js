var axios = require("axios");

export default async (from, to) => {
        let url;
    if (process.env.NODE_ENV === 'development') {
        url = `/convert/${from}/${to}`
    } else {
        url = `https://currency-convertor.netlify.com/.netlify/functions/requestSample?base=${from}&target=${to}`
    }
    return await axios.get(url)
}

