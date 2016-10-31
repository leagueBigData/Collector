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
        if(matchData.matches != undefined){
            var matchData = JSON.parse(body);
            callback(matchData.matches);
        }else{
            var err = JSON.parse(body);
            console.log('error code in response body :' + body);
            console.log('timeout for 10000');
            setTimeout(DataCollector.CollectData(callback,url),1000);
        }      
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});
};

module.exports = DataCollector;