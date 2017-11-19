$(window).on('load', function() {
    $("#cover").hide();
});

$(document).ready(function() {
	$('#main').html($('#main_section_home').html());
});

function show(param_div_id) {
	$('#main').html($('#' + param_div_id).html());
}