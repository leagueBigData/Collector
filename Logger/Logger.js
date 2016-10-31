var config = require('./../config');

var Logger = {};

Logger.LogEvent = function(log){

	if(config.debuger){
		console.log('---------------------------------' + log.Who);
		console.log(log);
		console.log('---------------------------------');
	}else{
		//code to record the erro to the database goes here :D
	}
}

module.exports = Logger;