$(function() {
	'use strict';

	var testlist = [
	{
		questionNum: 1,
		question: 'Вопрос № 1',
		answer1: 'Вариант ответа № 1',
		answer2: 'Вариант ответа № 2',
		answer3: 'Вариант ответа № 3',
		correct: [true, false, false]
	},
	{
		questionNum: 2,
		question: 'Вопрос № 2',
		answer1: 'Вариант ответа № 1',
		answer2: 'Вариант ответа № 2',
		answer3: 'Вариант ответа № 3',
		correct: [false, true, false]
	},
	{
		questionNum: 3,
		question: 'Вопрос № 3',
		answer1: 'Вариант ответа № 1',
		answer2: 'Вариант ответа № 2',
		answer3: 'Вариант ответа № 3',
		correct: [true, false, true]
	}];
	
	localStorage.setItem('testlist', JSON.stringify(testlist));

});


