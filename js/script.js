$(function() {
	'use strict';


	var $body = $('body');
	var $result_btn = $('.result');
	var $reset_btn = $('.reset');
	var $modal = $('.modal');
	

	$result_btn.on('click', showResult);
	
	$reset_btn.on('click', reloadResult);

	function showResult() {

		$modal.toggleClass('hide');
		$modal.one('click', function() {
			$(this).toggleClass('hide');
		});
		
	};	

	function reloadResult() {

		location.reload();

	};

});