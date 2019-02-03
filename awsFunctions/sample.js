exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: `Hello, World, you are running on ${process.env.NODE_ENV} with ${process.env.API_KEY}`
    });
}