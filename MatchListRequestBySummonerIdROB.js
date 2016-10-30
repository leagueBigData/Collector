var config = require('./config');

// -- Implementation Notes
// A number of optional parameters are provided for filtering. It is up to the caller to ensure 
// that the combination of filter parameters provided is valid for the requested summoner, otherwise, 
// no matches may be returned. If either of the beginTime or endTime parameters is set, 
// they must both be set, although there is no maximum limit on their range. If the beginTime parameter 
// is specified on its own, endTime is assumed to be the current time. If the endTime parameter is 
// specified on its own, beginTime is assumed to be the start of the summoner's match history.

// -- MatchListRequestBySummonerIdROB (Request Object):
// This is used to generate the url we would need to call the api


var MatchListRequestBySummonerIdROB = {
	host : config.host,
	path : config.MatchListRequestBySummonerIdPath,
	apiKey : config.apiKey,
	summonerId : undefined,
	championIds : {},
	rankedQueues : {},
	seasons : {},
	beginTime : undefined,
	endTime : undefined,
	beginIndex : undefined,
	endIndex : undefined
};

MatchListRequestBySummonerIdROB.setSummonerId = function(summonerId){
	MatchListRequestBySummonerIdROB.summonerId = summonerId + '?';
};

MatchListRequestBySummonerIdROB.setBeginTime = function(beginTime){
	MatchListRequestBySummonerIdROB.beginTime = 'beginTime=' + beginTime + '&';
};

MatchListRequestBySummonerIdROB.setEndTime = function(endTime){
	MatchListRequestBySummonerIdROB.endTime = 'endTime=' + endTime + '&';
};

MatchListRequestBySummonerIdROB.setBeginIndex = function(beginIndex){
	MatchListRequestBySummonerIdROB.beginIndex = 'beginIndex' + beginIndex + '&';
};

MatchListRequestBySummonerIdROB.setEndIndex = function(endIndex){
	MatchListRequestBySummonerIdROB.endIndex = 'endIndex=' + endIndex + '&';
};



MatchListRequestBySummonerIdROB.URL = function(){
	var str = MatchListRequestBySummonerIdROB.host + MatchListRequestBySummonerIdROB.path ;

	if(MatchListRequestBySummonerIdROB.summonerId != undefined){ str = str + MatchListRequestBySummonerIdROB.summonerId };
	if(MatchListRequestBySummonerIdROB.beginTime != undefined){ str = str + MatchListRequestBySummonerIdROB.beginTime };
	if(MatchListRequestBySummonerIdROB.endTime != undefined){ str = str + MatchListRequestBySummonerIdROB.endTime };
	if(MatchListRequestBySummonerIdROB.beginIndex != undefined){ str = str + MatchListRequestBySummonerIdROB.beginIndex };
	if(MatchListRequestBySummonerIdROB.endIndex != undefined){ str = str + MatchListRequestBySummonerIdROB.endIndex };
	if(MatchListRequestBySummonerIdROB.apiKey != undefined){ str = str + MatchListRequestBySummonerIdROB.apiKey };

	return str;
};

module.exports = MatchListRequestBySummonerIdROB;