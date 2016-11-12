var config = require('./config');
var logs = require('./Logger/Logger');
var http = require('https');

var DataCollector  = {};

DataCollector.StatusChecker = function(endPoint, code, data, callback){

    if(code == 200){
        if(config.debuger){
            DataCollector.Logger(endPoint, code, 'OK');
        };
        callback(data);
        return;
    };

    if(code == 400){
        DataCollector.Logger(endPoint, code, 'Bad request');
        return;
    };

    if(code == 401){
        DataCollector.Logger(endPoint, code, 'Unauthorized');
        return;
    };

    if(code == 403){
        DataCollector.Logger(endPoint, code, 'Forbidden');
        return;
    };

    if(code == 404){
        DataCollector.Logger(endPoint, code, 'Game not found');
        return;
    };

    if(code == 422){
        DataCollector.Logger(endPoint, code, 'Summoner has an entry, but hasn\'t played since the start of 2013');
        return;
    };

    if(code == 429){
        DataCollector.Logger(endPoint, code, 'Rate limit exceeded');
        setTimeout(DataCollector.CollectData(endPoint,callback),10000000000000);
        return;
    };

    if(code == 500){
        DataCollector.Logger(endPoint, code, 'Internal server error');
        return;
    };
    
    if(code == 503){
        DataCollector.Logger(endPoint, code, 'Service unavailable');
        return;
    };

    //all other errrors caught here
    DataCollector.Logger(endPoint, code, '---------WTF MOMENT--------------');

};

DataCollector.Logger = function(endPoint, code, message){
    
    log = {
        Who : 'DataCollector',
        StatusCode : code,
        Message : message,
        EndPoint : endPoint
    };

    logs.LogEvent(log);

};

DataCollector.CollectData = function(endPoint,callback){
	http.get(endPoint.URL(), function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        DataCollector.StatusChecker(endPoint, res.statusCode, JSON.parse(body), callback);    
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
      logs.LogEvent(e);
});
};

module.exports = DataCollector;