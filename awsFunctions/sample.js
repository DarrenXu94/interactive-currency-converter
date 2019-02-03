var request = require("request");

const getData = async (from,to, key) => {
    return new Promise((res,rej)=>{  
        var options = {
            method: 'GET',
            url: `https://api.currencystack.io/currency?base=${from}&target=${to}`,
            qs: { apikey: key },
            headers:
            {
              'postman-token': '0010f3d4-76e5-d044-31f3-42ecc4260371',
              'cache-control': 'no-cache'
            }
          };
        request(options, function (error, response, body) {      
          console.log(body);
          res(body)
          
        })
      })
}

exports.handler = async function(event, context, callback) {
    let key = process.env.API_KEY;
    let response = await getData('AUD', 'USD', key)
    console.log(response)
    callback(null, {
    statusCode: 200,
    body: `Hello, World ${response}`
    });
}