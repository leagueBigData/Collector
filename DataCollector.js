var config = require('./config');
var http = require('https');

var DataCollector  = {};

DataCollector.CollectData = function(callback,url){
	http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var matchData = JSON.parse(body);

        callback(matchData.matches);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});
};

module.exports = DataCollector;