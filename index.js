/* trees-story.tursics.de - JavaScript file */

/*jslint browser: true*/
/*global $*/

var visitorData = null;

// -----------------------------------------------------------------------------

String.prototype.startsWith = String.prototype.startsWith || function (prefix) {
	'use strict';

	return this.indexOf(prefix) === 0;
};

// -----------------------------------------------------------------------------

function getPageNumber(element) {
	'use strict';

	var i = 0,
		name,
		page = 0;

	for (i = 0; i < element.classList.length; ++i) {
		name = element.classList[i];
		if ((name.length > 4) && (0 === name.indexOf('page'))) {
			page = parseInt(name.substr(4), 10);
		}
	}

	return page;
}

// -----------------------------------------------------------------------------

function sendStatistics(selected, element) {
	'use strict';

	var page = getPageNumber(element),
		value = '',
		dataUrl;

	if ($('.ui-slider', $(element)).length > 0) {
		value = $('.ui-slider input', $(element)).val();
	} else {
		value = $(selected).text();
	}

	dataUrl = 'visitors.php?page=' + page + '&value=' + encodeURIComponent(value);
	$.getJSON(dataUrl, function () {
	});
}

// -----------------------------------------------------------------------------

function initQuiz() {
	'use strict';

	$('.embedQuiz .questionOptions a').on('click', function () {
		var element = this.parentElement.parentElement.parentElement;
		if ($('.ui-slider', $(element)).length > 0) {
			element = this.parentElement.parentElement;
		}

		$(this).addClass('selected');

		$('.questionOptions', $(element)).addClass('disabled');
		$('.ui-slider', $(element)).addClass('disabled');
		$('.count', $(element)).hide();
		$('.answer', $(element)).show();

		sendStatistics(this, element);
	});
	$('.embedQuiz .answer a').on('click', function () {
		var element = this.parentElement.parentElement.parentElement,
			page = getPageNumber(element);

		$('.embedQuiz .page' + page).hide();
		$('.embedQuiz .page' + (page + 1)).show();
	});
}

// -----------------------------------------------------------------------------

function setVisitorData(path) {
	'use strict';

	if (visitorData && visitorData.donate) {
		var val = $(path + ' input').val(),
			i,
			sum = 0,
			more = 0;

		for (i = 0; i < visitorData.donate.length; ++i) {
			if (i > val) {
				more += visitorData.donate[i];
			}
			sum += visitorData.donate[i];
		}

		if (sum === 0) {
			sum = 1;
		}

		val = parseInt(more / sum * 100, 10);
		$(path + ' .answer:first').html(val + '% der Leser würden mehr spenden als Sie');
	}
}

// -----------------------------------------------------------------------------

$(document).on("pageshow", "#pageMap", function () {
	'use strict';

	initQuiz();

	var dataUrl = 'data/visitors.json';
	$.getJSON(dataUrl, function (serverData) {
		visitorData = serverData;

		$('.embedQuiz .page6 .questionOptions a').on('click', function () {
			setVisitorData('.embedQuiz .page6');
		});
	});
});

// -----------------------------------------------------------------------------
