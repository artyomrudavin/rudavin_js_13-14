$(function() {
	'use strict';

	var html = $('#test').html();

	var questions = JSON.parse(localStorage.getItem('testlist'));
	
	var content = tmpl(html, {
		data: questions
	});

	$('body').append(content);

});