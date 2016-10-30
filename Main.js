var config = require('./config');
var http = require('https');

console.log(config);
var temp;

var url = config.host + config.matchHistoryEP + config.start + '?' + config.apiKey

http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var matchData = JSON.parse(body);
        console.log("Got a response count: ", matchData.matches.length);
        console.log("first ", matchData.matches[0]);
        temp = matchData.matches;
        getOnlyMatches();
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});

console.log(temp + 'temp----------');

var helo = function(){
	console.log('helloo');
};

var getOnlyMatches = function(){
	var matches = temp;
	for (var i = matches.length - 1; i >= 0; i = i - 20) {
		console.log('match number : ' + i + '----------------');
		console.log(matches[i]);
	}

};