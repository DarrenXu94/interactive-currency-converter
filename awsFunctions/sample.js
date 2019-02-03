let Currency = require('../api/Currency')

exports.handler = async function(event, context, callback) {
    let key = process.env.API_KEY;
    let response = await Currency(from, to, key)
    console.log(response)
    callback(null, {
    statusCode: 200,
    body: `Hello, World ${response}`
    });
}