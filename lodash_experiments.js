var Tile = function() {
	this.value = _.random(0, 9);
};

var x = new Tile();
$("#output").text(x.value);

var maplist = _.times( 3, () => { return(_.times( 3, () => { return (new Tile()) } )) } );
var appendMap = function (maplist, css) {_.forEach(maplist, (x) => {$(css).append("<div>" + _.join(_.map(x, "value"), " ") + "</div>")});};

appendMap(maplist, "#map");

var cycle_numbers = function(x) {
	if (x == 9) {
  	return(0);
  } else {
  	return(x + 1);
  };
};

_.forEach(maplist, (x) => {_.forEach(x, (y) => {_.update(y, "value", cycle_numbers)})});
appendMap(maplist, "#map2");


_.forEach(maplist, (x) => {_.forEach(x, (y) => {_.update(y, "value", cycle_numbers)})});
appendMap(maplist, "#map3");

_.update(_.filter(_.flatten(maplist), (x) => {return(x.value < 5)}), "value", cycle_numbers);
appendMap(maplist, "#map4");

