$( window ).load(function() {
    lightSweep('#banner','3s');
});

function lightSweep(id,time) {
	var ID =  id;
	var newID = $(ID).attr('id') + '_temp';
	var height = $(ID).css('height');
	var width = $(ID).css('width');
	var background = $(ID).css('background');
	var position = $(ID).position();
	var top = position.top + "px";
	var left = position.left + "px";

	$(ID).clone().insertAfter(ID).attr('id',newID).addClass('lightSweep lightSweepStart');
	$('#' + newID).css('height', height);
	$('#' + newID).css('width', width);
	$('#' + newID).css('top', top);
	$('#' + newID).css('left', left);
	$('#' + newID).css('background', background);
	$('#' + newID).css( "-webkit-transition-duration", time );
	$('#' + newID).css( "-moz-transition-duration", time );
	$('#' + newID).css( "-o-transition-duration", time );
	$('#' + newID).css( "transition-duration", time );
	setTimeout( function() { $('#' + newID).addClass('lightSweepEnd'); },20);
	$('#' + newID).bind("webkitTransitionEnd otransitionend oTransitionEnd transitionend", function() { $('#' + newID).remove(); });
}


