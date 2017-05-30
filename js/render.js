$(function() {
	'use strict';

	var html = $('#test').html();

	var testList = JSON.parse(localStorage.getItem('testlist'));
	
	for (i = 0; i < testList.length; i++){
		var content = tmpl(html, testList[i]);
		$('#test').before(content);
	}

});