var myCallback = function(data) {
	console.log('out usingItNow');
  	console.log('got data: '+data);
};

var usingItNow = function(callback) {
	console.log('maube');
  	callback('get it?');
};


usingItNow(myCallback);