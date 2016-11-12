//DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT
var RoleBuilder = {
	str : '',
	duo : 'DUO',
	none : 'NONE',
	solo : 'SOLO',
	duoCarry : 'DUO_CARRY',
	duoSupport : 'DUO_SUPPORT'
};

RoleBuilder.buildString = function(role){

	if(role.duo == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.duo + ',' };
	if(role.none == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.none + ',' };
	if(role.solo == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.solo + ',' };
	if(role.duoCarry == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.duoCarry + ',' };
	if(role.duoSupport == true){ RoleBuilder.str = RoleBuilder.str + RoleBuilder.duoSupport + ',' };

	if(str.length != 0){
	RoleBuilder.str = RoleBuilder.str.slice(0,-1);// remove the last comma
	}
	
	return RoleBuilder.str;
}


module.exports = RoleBuilder;