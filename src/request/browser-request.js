const request = require("request");

module.exports = function(url){
    return new Promise((resolve, reject)=> {
        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                resolve(JSON.parse(body));
            }
            else{
                reject(new Error (error) );
            }
        });
    });
};