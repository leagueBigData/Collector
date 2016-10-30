//TEAM_BUILDER_DRAFT_RANKED_5x5, RANKED_SOLO_5x5, RANKED_TEAM_3x3, RANKED_TEAM_5x5
var QueueBuilder = {
	str : '',
	teamBuilderDraftRanked5x5 : 'TEAM_BUILDER_DRAFT_RANKED_5x5',
	rankedTeam5x5 : 'RANKED_TEAM_5x5',
	rankedTeam3x3 : 'RANKED_TEAM_3x3',
	rankedSolo5x5 : 'RANKED_SOLO_5x5'
};

QueueBuilder.buildString = function(teamBuilderDraftRanked5x5, rankedTeam5x5, rankedTeam3x3, rankedSolo5x5){

	if(teamBuilderDraftRanked5x5 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.teamBuilderDraftRanked5x5 + ',' };
	if(rankedTeam5x5 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.rankedTeam5x5 + ',' };
	if(rankedTeam3x3 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.rankedTeam3x3 + ',' };
	if(rankedSolo5x5 == true){ QueueBuilder.str = QueueBuilder.str + QueueBuilder.rankedSolo5x5 + ',' };

	QueueBuilder.str = QueueBuilder.str.slice(0,-1);// remove the last comma

	return QueueBuilder.str;
}


module.exports = QueueBuilder;