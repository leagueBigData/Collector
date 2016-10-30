var config = require('./config');
var MatchListRequestBySummonerIdROB = require('./ApiEndPoints/MatchListRequestBySummonerIdROB');
var DataCollector = require('./DataCollector');



// Here we create the query we are going to make to the api
MatchListRequestBySummonerIdROB.setSummonerId(config.start);
// MatchListRequestBySummonerIdROB.setSeasons(
// 	false, false,false, false,false, false,true, true);

MatchListRequestBySummonerIdROB.setRankedQueues(
	false, false, true, false);

// MatchListRequestBySummonerIdROB.setChampionIds('266');

//url we are going to be using
console.log(MatchListRequestBySummonerIdROB.URL());


//just an iterator to display the data that was returned.
var getOnlyMatches = function(data){
	if(data == undefined){
		console.log('There was an error..... WTF!?!?');
	}else{
		var matches = data;
		for (var i = matches.length - 1; i >= 0; i --) {
			console.log('match number : ' + i +'----------------');
			console.log(matches[i]);
		}
		console.log('number of matches : ' + matches.length);
	}
};


// Here we use the Data collector to make the request to the api and 
// return the data to the callback on getOnlyMatches
DataCollector.CollectData(getOnlyMatches,MatchListRequestBySummonerIdROB.URL());