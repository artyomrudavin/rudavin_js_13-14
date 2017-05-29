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
		correct: 1
	},
	{
		question: 'Вопрос № 2',
		answers: [
		'Вариант ответа № 1',
		'Вариант ответа № 2',
		'Вариант ответа № 3'
		],
		correct: 3
	},
	{
		question: 'Вопрос № 3',
		answers: [
		'Вариант ответа № 1',
		'Вариант ответа № 2',
		'Вариант ответа № 3'
		],
		correct: 2
	}];
	
	localStorage.setItem('testlist', JSON.stringify(testlist));

});


