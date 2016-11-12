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

SeasonBuilder.buildString = function(season){

	if(season.preSeason3 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason3 + ',' };
	if(season.season3 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season3 + ',' };
	if(season.preSeason2014 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason2014 + ',' };
	if(season.season2014 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season2014 + ',' };
	if(season.preSeason2015 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason2015 + ',' };
	if(season.season2015 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season2015 + ',' };
	if(season.preSeason2016 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.preSeason2016 + ',' };
	if(season.season2016 == true){ SeasonBuilder.str = SeasonBuilder.str + SeasonBuilder.season2016 + ',' };

	if(str.length != 0){
	SeasonBuilder.str = SeasonBuilder.str.slice(0,-1);// remove the last comma
	}
	return SeasonBuilder.str;
}


module.exports = SeasonBuilder;