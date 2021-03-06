var request = require("request");

module.exports = async (from, to, key) => {
  if (process.env.NODE_ENV !== 'production') {
    key = require('./Private')
  }
  return new Promise((res, rej) => {
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