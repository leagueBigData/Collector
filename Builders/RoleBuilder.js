//DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT
var RoleBuilder = {
	str : '',
	duo : 'DUO',
	none : 'NONE',
	solo : 'SOLO',
	duoCarry : 'DUO_CARRY',
	duoSupport : 'DUO_SUPPORT'
};

RoleBuilder.buildString = function(duo, none, solo, duoCarry, duoSupport){

	if(duo == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.duo + ',' };
	if(none == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.none + ',' };
	if(solo == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.solo + ',' };
	if(duoCarry == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.duoCarry + ',' };
	if(duoSupport == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.duoSupport + ',' };

	RoleBuilder.str = RoleBuilder.str.slice(0,-1);// remove the last comma

	return RoleBuilder.str;
}


module.exports = RoleBuilder;