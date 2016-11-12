//TEAM_BUILDER_DRAFT_RANKED_5x5, RANKED_SOLO_5x5, RANKED_TEAM_3x3, RANKED_TEAM_5x5
var QueueBuilder = {
	str : '',
	teamBuilderDraftRanked5x5 : 'TEAM_BUILDER_DRAFT_RANKED_5x5',
	rankedTeam5x5 : 'RANKED_TEAM_5x5',
	rankedTeam3x3 : 'RANKED_TEAM_3x3',
	rankedSolo5x5 : 'RANKED_SOLO_5x5'
};

QueueBuilder.buildString = function(queue){

	if(queue.teamBuilderDraftRanked5x5 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.teamBuilderDraftRanked5x5 + ',' };
	if(queue.rankedTeam5x5 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.rankedTeam5x5 + ',' };
	if(queue.rankedTeam3x3 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.rankedTeam3x3 + ',' };
	if(queue.rankedSolo5x5 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.rankedSolo5x5 + ',' };

	if(str.length != 0){
	QueueBuilder.str = QueueBuilder.str.slice(0,-1);// remove the last comma
	}
	return QueueBuilder.str;
}


module.exports = QueueBuilder;