const https = require('https');

function httpGetAsync()
{
return new Promise((res,rej) => {

    https.get(`https://api.currencystack.io/currency?base=USD&target=EUR&apikey=${process.env.API_KEY}`, (resp) => {
        let data = '';
        
        //   // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data));
            res(JSON.parse(data))
        });
        
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
})
}

exports.handler = async function(event, context, callback) {
    let res = await httpGetAsync()
    callback(null, {
        statusCode: 200,
        body: `Hello, World ${res.toString()}`
        });
    
}