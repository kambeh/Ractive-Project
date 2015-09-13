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

var listener = ractive.on({
  neg25: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat(value - 0.25);
	    console.log( 'neg 25! ' + result);
		
	if(result >= 0){
		ractive.set( 'tbar', result);
		ractive.set( 'barcolor', ractive.get('normalcolor'));
	}	
  },
  pos25: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat(value + 0.25);
	    console.log( 'pos 25! ' + result);
	if(result <= 1){
		ractive.set( 'tbar', result);
	}
	else{
		ractive.set( 'barcolor', ractive.get('exceedcolor'));
	}	
  },
  neg10: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat((value - 0.1).toFixed(2));
		console.log( 'neg 10! ' + result);
	if(result >= 0){
		ractive.set( 'tbar', result);
		ractive.set( 'barcolor', ractive.get('normalcolor'));
	}
  },
  pos10: function () {
	var value = ractive.get( 'tbar');
	var result = parseFloat((value + 0.1).toFixed(2));
		console.log( 'pos 10! ' + result);
	if(result <= 1){
		ractive.set( 'tbar', result);
	}
	else{
		ractive.set( 'barcolor', ractive.get('exceedcolor'));
	}
  }
});
