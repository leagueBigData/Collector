var config = require('./config');
var MatchListRequestBySummonerIdROB = require('./MatchListRequestBySummonerIdROB');
var DataCollector = require('./DataCollector');



// Here we create the query we are going to make to the api
MatchListRequestBySummonerIdROB.setSummonerId(config.start);


//url we are going to be using
console.log(MatchListRequestBySummonerIdROB.URL());


//just an iterator to display the data that was returned.
var getOnlyMatches = function(data){
	var matches = data;
	for (var i = matches.length - 1; i >= 0; i = i - 20) {
		console.log('match number : ' + i + '----------------');
		console.log(matches[i]);
	}

};


// Here we use the Data collector to make the request to the api and 
// return the data to the callback on getOnlyMatches
DataCollector.CollectData(getOnlyMatches,MatchListRequestBySummonerIdROB.URL());