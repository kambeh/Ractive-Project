var ractive = new Ractive({
  el: '#container',
  template: '#template',
  bref: 'tbar',
  
  data: {
      name: 'Interactive Progress bar',
      bar_height: 50,
        tbar: 0.5,
        mbar: 0.75,
        ubar: 1.0,		
		barcolor: 'orange',
		normalcolor: 'orange',
		exceedcolor: 'red',
  }
});

var setNormalBar = function(result) {
	if(result >= 0){
		ractive.set( getbarRef(), result);
	}
	else{
		// set bar to zero if result is less than zero.
		ractive.set( getbarRef(), 0);
	}
	
	ractive.set( 'barcolor', ractive.get('normalcolor'));
};

var setExceededBar = function(result) {
	if(result <= 1){
		ractive.set( getbarRef(), result);
	}
	else{
		// set bar to one if result is greater than one.
		ractive.set( getbarRef(), 1);		
		ractive.set( 'barcolor', ractive.get('exceedcolor'));
	}
};

var getbarRef = function() {
	return ractive.bref;
}

var listener = ractive.on({
  neg25: function () {
	var value = ractive.get(getbarRef());
	var result = parseFloat((value - 0.25).toFixed(2));
	    console.log( 'neg 25! ' + result);
	setNormalBar(result);
  },
  pos25: function () {
	var value = ractive.get(getbarRef());
	var result = parseFloat((value + 0.25).toFixed(2));
	    console.log( 'pos 25! ' + result);
	setExceededBar(result);
  },
  neg10: function () {
	var value = ractive.get(getbarRef());
	var result = parseFloat((value - 0.1).toFixed(2));
		console.log( 'neg 10! ' + result);
	setNormalBar(result);
  },
  pos10: function () {
	var value = ractive.get(getbarRef());
	var result = parseFloat((value + 0.1).toFixed(2));
		console.log( 'pos 10! ' + result);
	setExceededBar(result);
  }
});
