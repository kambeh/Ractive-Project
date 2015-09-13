var ractive = new Ractive({
  el: '#container',
  template: '#template',
  bref: { bar: 'tbar', color: 'tbarcolor' },		// reference to which bar and color
  
  data: {
      name: 'Interactive Progress bar',
      bar_height: 50,
        tbar: 0.5,
        mbar: 0.75,
        ubar: 1.0,		
		normalcolor: 'orange',
		exceedcolor: 'red',
  }
});

var init = function() {
	ractive.set('tbarcolor', ractive.get('normalcolor'));
	ractive.set('mbarcolor', ractive.get('normalcolor'));
	ractive.set('ubarcolor', ractive.get('normalcolor'));
}

/*
 * Set bar value based on bar reference for normal range (0-1)
 */
var setNormalBar = function(result) {
	if(result >= 0){
		ractive.set( getbarRef('bar'), result);
	}
	else{
		// set bar to zero if result is less than zero.
		ractive.set( getbarRef('bar'), 0);
	}
	
	ractive.set( getbarRef('color'), ractive.get('normalcolor'));
};

/*
 * Set bar reference based on bar reference for range outside 1
 */
var setExceededBar = function(result) {
	if(result <= 1){
		ractive.set( getbarRef('bar'), result);
	}
	else{
		// set bar to one if result is greater than one.
		ractive.set( getbarRef('bar'), 1);
		
		// set bar color to red if result is greater than one.		
		ractive.set( getbarRef('color'), ractive.get('exceedcolor'));
	}
};

/*
 * Get bar reference
 */
var getbarRef = function(qry) {
	var ref;
	
	if ( qry == 'bar' ){
		ref = ractive.bref.bar;
	}
	else{
		ref = ractive.bref.color;
	}
	
	return ref;
}

/*
 * Set bar reference
 */
var setbarRef = function(barRef, bcolor) {
	ractive.bref.bar = barRef;
	ractive.bref.color = bcolor;
}

/*
 * Listener functions for buttons
 */
var listener = ractive.on({
  neg25: function () {
	var value = ractive.get(getbarRef('bar'));
	var result = parseFloat((value - 0.25).toFixed(2));
	setNormalBar(result);
  },
  pos25: function () {
	  console.log(getbarRef('bar'));
	var value = ractive.get(getbarRef('bar'));
	var result = parseFloat((value + 0.25).toFixed(2));
	setExceededBar(result);
  },
  neg10: function () {
	var value = ractive.get(getbarRef('bar'));
	var result = parseFloat((value - 0.1).toFixed(2));
	setNormalBar(result);
  },
  pos10: function () {
	var value = ractive.get(getbarRef('bar'));
	var result = parseFloat((value + 0.1).toFixed(2));
	setExceededBar(result);
  }
});

/*
 * callback function for select dropdown options
 */
var getOptionValue = function (index) {
	  switch (index) {
		  case 0:
				setbarRef('tbar', 'tbarcolor');
				break;
		  case 1:
				setbarRef('mbar', 'mbarcolor');
				break;
		  case 2:
				setbarRef('ubar', 'ubarcolor');
				break;
		  default:
				setbarRef('tbar', 'tbarcolor');
	  }
}