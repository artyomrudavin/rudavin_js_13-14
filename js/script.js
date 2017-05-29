$(function() {
	'use strict';


  var $testList = JSON.parse(localStorage.getItem('testlist'));
  var $body = $('body');
	var $result_btn = $('.result');
	var $reset_btn = $('.reset');
	var $modal = $('.modal');
  

	$result_btn.on('click', showResult);
	
	$reset_btn.on('click', reloadResult);

	function showResult() {

		$modal.toggleClass('hide');
				
	};	

	function reloadResult() {

		location.reload();

	};

});