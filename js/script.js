'use strict';

$(function() {

	var data = [
	{
		questionNum: 1,
		question: 'Вопрос № 1',
		ansver1: 'Вариант ответа № 1',
		ansver2: 'Вариант ответа № 2',
		ansver3: 'Вариант ответа № 3',
		correct: [true, true, true]	
	},
	{
		questionNum: 2,
		question: 'Вопрос № 2',
		ansver1: 'Вариант ответа № 1',
		ansver2: 'Вариант ответа № 2',
		ansver3: 'Вариант ответа № 3',
		correct: [true, true, false]	
	},
	{
		questionNum: 3,
		question: 'Вопрос № 2',
		ansver1: 'Вариант ответа № 1',
		ansver2: 'Вариант ответа № 2',
		ansver3: 'Вариант ответа № 3',
		correct: [false, false, true]	
	}];


	// отправляем в localStorage
	localStorage.setItem('test', JSON.stringify(data));
	

	// рендерим тест с вопросами
	var html = $('#test').html();
	var testList = JSON.parse(localStorage.getItem('test'));
	
	for (var i = 0; i < testList.length; i++) {
		var content = tmpl(html, testList[i]);
		$('#test').before(content);
	}


	// обработчик клика
	$('#check-btn').on('click', function(e) {

		e.preventDefault();
		
		var result = 0;
		var answerResult = []; 
		var correctResult = 0; 

		for (var i = 0; i < testList.length; i++) { 
			
			var questionObj = document.getElementById("q"+(i+1));
			var answerObj = testList[i].correct;
			
			$(questionObj).find("input").each(function(i) {

				if( $(this).prop("checked") == true) {
					answerResult.push(true); 
				} else {
					answerResult.push(false); 
				};

			});
			
			
			for (var j = 0; j < answerResult.length; j++) { 

				if ((answerResult[j] == true) && (answerObj[j] == true) ) {
					correctResult = correctResult + 1;
				} else {
					if ((answerResult[j] == true) && (answerObj[j] == false) ) {
						correctResult = false;
						j = answerResult.length;
					}
				};

			};

			if (correctResult) {
				result = result + correctResult;
			}

			answerResult = []; 
			correctResult = 0;

		};

		$(".modal").removeClass('hide');

		var message = "Вы набрали ";

		if (result <= 3 ) {
			message = message + result + " балла(ов). Вы не сдали Тест.";
		} else {
			message = message + result + " балла(ов). Поздравляю! Вы сдали Тест.";
		}

		$('.modal-body p').append(message);
		
	});


	// обработчик на кнопку закрытия модального окна
	$('.close-btn').on('click', function(e) {

		e.preventDefault();

		$(":input").prop("checked", false);
		$('.modal-body p').empty();
		$(".modal").addClass('hide');

	});

});

