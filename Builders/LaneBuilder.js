//MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM
var LaneBuilder = {
	str : '',
	mid : 'mid',
	middle : 'middle',
	top : 'top',
	jungle : 'jungle',
	bot : 'bot',
	bottom : 'bottom'
};

LaneBuilder.buildString = function(mid, middle, top, jungle, bot, bottom){

	if(mid == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.mid + ',' };
	if(middle == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.middle + ',' };
	if(top == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.top + ',' };
	if(jungle == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.jungle + ',' };
	if(bot == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.bot + ',' };
	if(bottom == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.bottom + ',' };

	LaneBuilder.str = LaneBuilder.str.slice(0,-1);// remove the last comma


	return LaneBuilder.str;
}


module.exports = LaneBuilder;