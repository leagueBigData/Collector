var config = require('./../config');
var QueueBuilder = require('./../Builders/QueueBuilder');
var RoleBuilder = require('./../Builders/RoleBuilder');
var SeasonBuilder = require('./../Builders/SeasonBuilder');

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
	name : 'MatchListRequestBySummonerIdROB',
	host : config.host,
	path : config.MatchListRequestBySummonerIdPath,
	apiKey : config.apiKey,
	summonerId : undefined,
	championIds : undefined,
	rankedQueues : undefined,
	seasons : undefined,
	beginTime : undefined,
	endTime : undefined,
	beginIndex : undefined,
	endIndex : undefined
};

MatchListRequestBySummonerIdROB.setSummonerId = function(summonerId){
	MatchListRequestBySummonerIdROB.summonerId = summonerId + '?';
};

MatchListRequestBySummonerIdROB.setChampionIds = function(championIds){
	MatchListRequestBySummonerIdROB.championIds = 'championIds=' + championIds + '&';
};

MatchListRequestBySummonerIdROB.setRankedQueues = function(teamBuilderDraftRanked5x5, rankedTeam5x5, 
															rankedTeam3x3, rankedSolo5x5){

	var str = QueueBuilder.buildString(teamBuilderDraftRanked5x5, rankedTeam5x5,
										 rankedTeam3x3, rankedSolo5x5);

	MatchListRequestBySummonerIdROB.rankedQueues = 'rankedQueues=' + str + '&';
};

MatchListRequestBySummonerIdROB.setSeasons = function(preSeason3, season3, preSeason2014,
														 season2014, preSeason2015, season2015,
														 preSeason2016, season2016){
	
	var str = SeasonBuilder.buildString(preSeason3, season3, preSeason2014,
										 season2014, preSeason2015, season2015,
										 preSeason2016, season2016);
	
	MatchListRequestBySummonerIdROB.seasons = 'seasons=' + str + '&';
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
	if(MatchListRequestBySummonerIdROB.championIds != undefined){ str = str + MatchListRequestBySummonerIdROB.championIds };
	if(MatchListRequestBySummonerIdROB.seasons != undefined){ str = str + MatchListRequestBySummonerIdROB.seasons };
	if(MatchListRequestBySummonerIdROB.rankedQueues != undefined){ str = str + MatchListRequestBySummonerIdROB.rankedQueues };
	if(MatchListRequestBySummonerIdROB.apiKey != undefined){ str = str + MatchListRequestBySummonerIdROB.apiKey };


	return str;
};

module.exports = MatchListRequestBySummonerIdROB;