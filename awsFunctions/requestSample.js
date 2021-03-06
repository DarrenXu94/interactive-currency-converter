const https = require('https');

function httpGetAsync(from,to)
{
return new Promise((res,rej) => {
    console.log(process.env.API_KEY)
    https.get(`https://api.currencystack.io/currency?base=${from}&target=${to}&apikey=${process.env.API_KEY}`, (resp) => {
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
    let eventCode = event
    let queryStringParameters = eventCode.queryStringParameters
    // Have some query checking here
    let from = queryStringParameters['base'];
    let to = queryStringParameters['target']

    let res = await httpGetAsync(from,to)

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
        });
    
}