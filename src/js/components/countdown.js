import moment from 'moment/src/moment';




window.onload = function (e) {
	if($('body').hasClass('page--countdown')){
		const final = $('#promocao').html();

		console.log(moment(final, 'DD-MM-YYYY HH:mm:ss').unix())

		var $clock = $('#clock'),
			eventTime = moment(final, 'DD-MM-YYYY HH:mm:ss').unix(),
			currentTime = moment().unix(),
			diffTime = eventTime - currentTime,
			duration = moment.duration(diffTime * 1000, 'milliseconds'),
			interval = 1000;

		// if time to countdown
		if (diffTime > 0) {

			// Show clock
			// $clock.show();

			var $d = $('<div class="digital days"><span class="value"></span><span class="text">Dias</span></div>').appendTo($clock),
				$h = $('<div class="digital hours"><span class="value"></span><span class="text">Horas</span></div>').appendTo($clock),
				$m = $('<div class="digital minutes"><span class="value"></span><span class="text">Mins</span></div>').appendTo($clock),
				$s = $('<div class="digital seconds" ><span class="value"></span><span class="text">Segs</span></div>').appendTo($clock);

			setInterval(function () {

				duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
				var d = moment.duration(duration).days(),
					h = moment.duration(duration).hours(),
					m = moment.duration(duration).minutes(),
					s = moment.duration(duration).seconds();

				d = $.trim(d).length === 1 ? '0' + d : d;
				h = $.trim(h).length === 1 ? '0' + h : h;
				m = $.trim(m).length === 1 ? '0' + m : m;
				s = $.trim(s).length === 1 ? '0' + s : s;

				// show how many hours, minutes and seconds are left
				$d.find('.value').text(d);
				$h.find('.value').text(h);
				$m.find('.value').text(m);
				$s.find('.value').text(s);

			}, interval);

		}
	}


};
