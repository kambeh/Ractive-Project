var ractive = new Ractive({
  el: '#container',
  template: '#template',
  
  data: {
      name: 'Interactive Progress bar',
      bar_height: 50,
        tbar: 0.5,
        mbar: 0.75,
        ubar: 1.0,		
		barcolor: 'orange',
		normalcolor: 'orange',
		exceedcolor: 'red'
  }
});

var setNormalBar = function(result) {
	if(result >= 0){
		ractive.set( 'tbar', result);
		ractive.set( 'barcolor', ractive.get('normalcolor'));
	}		
};

var setExceededBar = function(result) {
	if(result <= 1){
		ractive.set( 'tbar', result);
	}
	else{
		ractive.set( 'barcolor', ractive.get('exceedcolor'));
	}	
};

var listener = ractive.on({
  neg25: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat((value - 0.25).toFixed(2));
	    console.log( 'neg 25! ' + result);
	setNormalBar(result);
  },
  pos25: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat((value + 0.25).toFixed(2));
	    console.log( 'pos 25! ' + result);
	setExceededBar(result);
  },
  neg10: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat((value - 0.1).toFixed(2));
		console.log( 'neg 10! ' + result);
	setNormalBar(result);
  },
  pos10: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat((value + 0.1).toFixed(2));
		console.log( 'pos 10! ' + result);
	setExceededBar(result);
  },
});
