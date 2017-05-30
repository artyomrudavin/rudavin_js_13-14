'use strict';

$(function(){

	var data = [
	{
		questionNum: 1,
		question: 'Вопрос № 1',
		ansver1: 'Вариант ответа № 1',
		ansver2: 'Вариант ответа № 2',
		ansver3: 'Вариант ответа № 3',
		right: [false, true, true]	
	},
	{
		questionNum: 2,
		question: 'Вопрос № 2',
		ansver1: 'Вариант ответа № 1',
		ansver2: 'Вариант ответа № 2',
		ansver3: 'Вариант ответа № 3',
		right: [true, false, false]	
	},
	{
		questionNum: 3,
		question: 'Вопрос № 2',
		ansver1: 'Вариант ответа № 1',
		ansver2: 'Вариант ответа № 2',
		ansver3: 'Вариант ответа № 3',
		right: [true, false, true]	
	}];

	localStorage.setItem('test', JSON.stringify(data));
	var html = $('#test').html();
	
	
	var testList = JSON.parse(localStorage.getItem('test'));
	
	//виводимо питання на екран
	for (var i = 0; i < testList.length; i++){
		var content = tmpl(html, testList[i]);
		$('#test').before(content);
	}

	//встановлюємо обробник кліка на кнопку
	$('#check-button').click(function(event){
		event.preventDefault();
		
		var rez = 0;
			var ansverRez = []; //масив для запису стану чекбосів
			var qurentRez = 0; //для підрахунку балів

		//проходимо по питаннях
		for (var i = 0; i < testList.length; i++){ 
			
			// console.log("question № ", i+1, "==========================================");
			
			var questionObj = document.getElementById("q"+(i+1));
			var ansverObj = testList[i].right; //масив вірних відповідей
			//проходимо по чекбоксах, записуємо результати в масив
			$(questionObj).find("input").each(function(i){
				if( $(this).prop("checked") == true){
					ansverRez.push(true);
				} else {
					ansverRez.push(false);
				};
			});
			
			//порівнюємо масив отриманих відповідей з масивом вірних відповідей
			for (var j = 0; j < ansverRez.length; j++){
				if ((ansverRez[j] == true)&&(ansverObj[j] == true) ){//відмічено правельний чекбокс
					qurentRez = qurentRez + 1;
				} else {
					if ((ansverRez[j] == true)&&(ansverObj[j] == false) ){//відмічено не правильний чекбокс
						qurentRez = false;
						j = ansverRez.length;
					}
				};
			};
			//якщо не було неправильної відповіді сумуємо бали за правильно відмічені чекбокси
			if (qurentRez) {
				rez = rez + qurentRez;
			}
			ansverRez = []; //обнуляємо масив стану чекбоксів пред наступним проходом(питанням)
			qurentRez = 0;  //обнуляємо поточну кількість вірних відповідей перед наступним питанням 
		};

		//показуємо результат
		$(".modal").removeClass('hide');
		var message = "Вы набрали ";
		if (rez <= 3 ){
			message = message + rez + " балла(ов). Вы не сдали Тест.";
		} else{
			message = message + rez + " балла(ов). Поздравляю! Вы сдали Тест.";
		}
		$('.modal-body').append(message);
		
	});

	//встановлюємо обробник кліка на кнопку закриття модального вікна
	$('.close-button').click(function(event){
		event.preventDefault();
		$(":input").prop("checked", false);
		$('.modal-body').empty();
		$(".modal").addClass('hide');
	});

});

