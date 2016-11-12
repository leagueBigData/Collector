var config = require('./config');
var MatchListRequestBySummonerIdROB = require('./ApiEndPoints/MatchListRequestBySummonerIdROB');

var MatchDetailsByMatchIdROB = require('./ApiEndPoints/MatchDetailsByMatchIdROB');

var DataCollector = require('./DataCollector');


//Requesting match specific information by ID
function grabInfoAboutMatch(matchId){
	console.log('Match data for match' + matchId);
	MatchDetailsByMatchIdROB.setMatchId(matchId);
	DataCollector.CollectData(MatchDetailsByMatchIdROB,printMatchInformationReturned);
}

// Here we create the query we are going to make to the api
MatchListRequestBySummonerIdROB.setSummonerId(config.start);

var matchIdList = [];

//just an iterator to display the data that was returned.
function getOnlyMatches(data){
		var matches = data.matches;
		for (match of matches) {
			//console.log('match number : ' + match.matchId +'----------------');
			//console.log(match);
			matchIdList.push(match.matchId);
			//console.log('---------------------------------------------------');

		}
		console.log('number of matches : ' + matches.length);
		printOutMatchList(matchIdList);
};

// Here we use the Data collector to make the request to the api and 
// return the data to the callback on getOnlyMatches
DataCollector.CollectData(MatchListRequestBySummonerIdROB,getOnlyMatches);

function printOutMatchList(matchIdList){
	var str = '';
	for(matchId of matchIdList){
		str = str + matchId + ',';
	}
	console.log('List of all the matches');
	console.log(str);
};

function printMatchInformationReturned(data){
	console.log('Match data for only one game 1547205078');
	console.log('---------------------------------------------------');
	console.log(data);
	console.log('---------------------------------------------------');
}

grabInfoAboutMatch(1547205078);