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

LaneBuilder.buildString = function(lane){

	if(lane.mid == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.mid + ',' };
	if(lane.middle == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.middle + ',' };
	if(lane.top == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.top + ',' };
	if(lane.jungle == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.jungle + ',' };
	if(lane.bot == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.bot + ',' };
	if(lane.bottom == true){ LaneBuilder.str = LaneBuilder.str + LaneBuilder.bottom + ',' };

	if(str.length != 0){
	LaneBuilder.str = LaneBuilder.str.slice(0,-1);// remove the last comma
	}

	return LaneBuilder.str;
}


module.exports = LaneBuilder;