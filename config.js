var config = {};

config.start = '35241849';

config.region = 'na';

config.apiKey = 'api_key=e63ca19d-7ce7-4fc7-9b85-35759aab7ec6';
config.host = 'https://na.api.pvp.net';

config.matchHistoryEP = '/api/lol/' + config.region + '/v2.2/matchlist/by-summoner/';

config.matchEP = '/match/';


module.exports = config;