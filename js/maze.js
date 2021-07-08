$(function() {
  /**
   *	Function to determine whether the first element completely 
   *  eclipses the second element
   */
  function collision($end, $start) {
    let x1 = $start.offset().left;
    let y1 = $start.offset().top;
    let h1 = $start.outerHeight(true);
    let w1 = $start.outerWidth(true);
    let b1 = y1 + h1;
    let r1 = x1 + w1;
    let x2 = $end.offset().left;
    let y2 = $end.offset().top;
    let h2 = $end.outerHeight(true);
    let w2 = $end.outerWidth(true);
    let b2 = y2 + h2;
    let r2 = x2 + w2;

   if( x2==x1){
   	$('#game_result').text('Congratulations you won!');
   }
  	
  }
    


    function collision2($start, $boundary) {
    let x1 = $boundary.offset().left;
    let y1 = $boundary.offset().top;
    let h1 = $boundary.outerHeight(true);
    let w1 = $boundary.outerWidth(true);
    let b1 = y1 + h1;
    let r1 = x1 + w1;
    let x2 = $start.offset().left;
    let y2 = $start.offset().top;
    let h2 = $start.outerHeight(true);
    let w2 = $start.outerWidth(true);
    let b2 = y2 + h2;
    let r2 = x2 + w2;

    return x1 > x2 && y1 > y2 || b1 < b2 && r1 < r2
      ? true
      : false
  }



  // draggable jQuery listener required jQuery UI
  // Just used to illustrate the above
  $('#start,.boundary,#end').draggable({
    drag: function() {
      if (collision2($('#start'), $('.boundary'))) {
      	$('.boundary').css({'background-color': 'grey'})
      	$('#game_result').text('You lose! You hit the boundary!');
      	collision($('#start'), $('#end'));
      } else {
        $('.boundary').css({'background-color': 'green'});
        	collision($('#start'), $('#end'));
        	
      }
    }
  });
});