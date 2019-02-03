function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

exports.handler = async function(event, context, callback) {
    httpGetAsync('https://stackoverflow.com/questions/247483/http-get-request-in-javascript', (res) => {
    console.log(res)
    callback(null, {
        statusCode: 200,
        body: `Hello, World ${res}`
        });
})
    
}