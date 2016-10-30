//PRESEASON3, SEASON3, PRESEASON2014, SEASON2014, PRESEASON2015, SEASON2015, PRESEASON2016, SEASON2016
var SeasonBuilder = {
	str : '',
	preSeason3 : 'PRESEASON3',
	season3 : 'SEASON3',
	preSeason2014 : 'PRESEASON2014',
	season2014 : 'SEASON2014',
	preSeason2015 : 'PRESEASON2015',
	season2015 : 'SEASON2015',
	preSeason2016 : 'PRESEASON2016',
	season2016 : 'SEASON2016'
};

SeasonBuilder.buildString = function(preSeason3, season3, preSeason2014, season2014,
										preSeason2015, season2015, preSeason2016, season2016){

	if(preSeason3 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason3 + ',' };
	if(season3 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season3 + ',' };
	if(preSeason2014 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason2014 + ',' };
	if(season2014 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season2014 + ',' };
	if(preSeason2015 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason2015 + ',' };
	if(season2015 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season2015 + ',' };
	if(preSeason2016 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason2016 + ',' };
	if(season2016 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season2016 + ',' };

	SeasonBuilder.str = SeasonBuilder.str.slice(0,-1);// remove the last comma

	return SeasonBuilder.str;
}


module.exports = SeasonBuilder;