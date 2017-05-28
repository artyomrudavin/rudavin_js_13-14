$(function() {

	var test = {
		createTitle: function() {
			var title = document.createElement('h3');
			title.classList.add('title');
			title.innerHTML = 'Тест по программированию';
			title.style.textAlign = 'center';
			title.style.marginTop = '20px';
			title.style.marginBottom = '50px';
			
			var body = document.body;
			body.insertBefore(title, body.children[0]);
		},

		createForm: function() {
			var form = document.createElement('form');
			form.setAttribute('action', '#');
			form.classList.add('form');
			
			var body = document.body;
			body.insertBefore(form, body.children[1]);
		},

		createQuestions: function() {
			var questionList = document.createElement('ol');
			questionList.style.marginLeft = '15%';

			var parent = document.querySelector('form');
			parent.appendChild(questionList);

			for (var i = 1; i <= 3; i++) {
				var question = document.createElement('li');
				var questionLabel = document.createElement('h5');
				var questionText = document.createTextNode('Вопрос №' + i);

				var answer = document.createElement('div');
				answer.style.marginTop = '20px';
				answer.style.marginBottom = '20px';
				
				for (var j = 1; j <= 3; j++) {
					var label = document.createElement('label');
					var br = document.createElement('br');
					var input = document.createElement('input');
					input.type = 'checkbox';
					input.classList = 'checkbox';
					input.style.marginRight = '10px'
					var text = document.createTextNode('Вариант ответа №' + j);
					label.appendChild(input);
					label.appendChild(text);
					answer.appendChild(label);
					answer.appendChild(br);
				}

				questionList.appendChild(question);
				questionList.appendChild(answer);
				question.appendChild(questionLabel);
				questionLabel.appendChild(questionText);
			}
		},

		createButton: function() {
			var button = document.createElement('button');
			button.innerHTML = 'Проверить мои результаты';
			button.classList = 'btn btn-primary';
			button.style.marginLeft = '40%';
			button.style.marginBottom = '50px';
			
			var parent = document.querySelector('form');
			parent.appendChild(button);
		}
	}

	test.createTitle();
	test.createForm();
	test.createQuestions();
	test.createButton();

});