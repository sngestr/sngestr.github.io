$(document).ready(function() {
	$('#wrapper').fadeIn();
	$('#main').html($('#main_section_home').html());
});

function show(param_div_id) {
	$('#main').fadeOut('normal', function() {
      $('#main').html($('#' + param_div_id).html());
      $('#main').fadeIn('normal');
  });
}