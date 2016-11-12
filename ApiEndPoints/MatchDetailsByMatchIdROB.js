var config = require('./../config');

// -- Implementation Notes
// Not all matches have timeline data. If timeline data is requested,
// but doesn't exist, then the response won't include it.



// -- MatchDetailsByMatchIdROB (Request Object):
// This is used to generate the url we would need to call the api


var MatchDetailsByMatchIdROB = {
	name : 'MatchDetailsByMatchIdROB',
	host : config.host,
	path : config.MatchDetailsByMatchIPath,
	apiKey : config.apiKey,
	matchId : undefined,

};

MatchDetailsByMatchIdROB.setMatchId = function(matchId){
	MatchDetailsByMatchIdROB.matchId = matchId + '?';
};

MatchDetailsByMatchIdROB.URL = function(){
	var str = MatchDetailsByMatchIdROB.host + MatchDetailsByMatchIdROB.path ;

	if(MatchDetailsByMatchIdROB.matchId != undefined){ str = str + MatchDetailsByMatchIdROB.matchId };
	if(MatchDetailsByMatchIdROB.apiKey != undefined){ str = str + MatchDetailsByMatchIdROB.apiKey };

	return str;
};

module.exports = MatchDetailsByMatchIdROB;