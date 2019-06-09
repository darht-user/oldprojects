jQuery(function ($) {

	/*-----------TIMER--------------*/
	//дата окончания таймера
	
	var now = new Date();
	var dateEnd = new Date();
	dateEnd.setDate(now.getDate()+1);
	dateEnd.setHours(19, 0, 0, 0);
	
	var day = dateEnd.getDate();
	var month = dateEnd.getMonth() + 1;
	if (day < 10){
		day = "0" + day;
	}

	if (month < 10){
		month = "0" + month;
	}  
	$("#date").text(day + "." + month);
	//var dateEnd = new Date(2018, 3, 12);

	//тут всё просто я думаю))
	var daysSpan = document.querySelector('.days');
	var hoursSpan = document.querySelector('.hours');
	var minutesSpan = document.querySelector('.minutes');
	var secondsSpan = document.querySelector('.seconds');


	//главная функция
	function updater() {
		//считаем разницу в миллисекундах
		var t = Date.parse(dateEnd) - Date.parse(new Date());

		//количество секунд, минут, часов и дней
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));

		//вставляем в html документ наши переменные
		daysSpan.innerHTML = days;
		hoursSpan.innerHTML = hours;
		minutesSpan.innerHTML = minutes;
		secondsSpan.innerHTML = seconds;

		//изменяем атрибут strokeDashoffset для 4-х значений
		//strokeDashoffset - смещение обводки
		document.getElementById("secondsCircle").style.strokeDashoffset = Math.PI * 50 * (360 - seconds * 6) / 180.0;
		document.getElementById("minutesCircle").style.strokeDashoffset = Math.PI * 50 * (360 - minutes * 6) / 180.0;
		document.getElementById("hoursCircle").style.strokeDashoffset = Math.PI * 50 * (360 - hours * 15) / 180.0;
		document.getElementById("daysCircle").style.strokeDashoffset = Math.PI * 50 * (360 - days * 12) / 180.0;
	}


	//запускаем функцию каждую секунду
	setInterval(updater, 1000);
	/*-----------REQUEST INST---------*/
	var tok = '1620400570.0d62c9c.fedae009c4a64195a927a11c7affd732',
		userid = 1620400570,
		amount = 2;

	$.ajax({
		url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: { access_token: tok, count: amount },
		success: function (result) {
			console.log(result);
			//(x in result.data)			
			/* for (var i=0; i<result.data.length; i++) { */
			var i = 0;
			$('.fresh').each(function () {
				$(this).append('<img src="' + result.data[i++].images.low_resolution.url + '" class="img-responsive">');
			});
			/* } */
		},
		error: function (result) {
			console.log(result);
		}
	});

});