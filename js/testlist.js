$(function() {
	'use strict';

	var testlist = [
	{
		question: 'Вопрос № 1',
		answers: [
		'Вариант ответа № 1',
		'Вариант ответа № 2',
		'Вариант ответа № 3'
		],
		correct: [true, false, false]
	},
	{
		question: 'Вопрос № 2',
		answers: [
		'Вариант ответа № 1',
		'Вариант ответа № 2',
		'Вариант ответа № 3'
		],
		correct: [false, true, false]
	},
	{
		question: 'Вопрос № 3',
		answers: [
		'Вариант ответа № 1',
		'Вариант ответа № 2',
		'Вариант ответа № 3'
		],
		correct: [true, false, true]
	}];
	
	localStorage.setItem('testlist', JSON.stringify(testlist));

});


