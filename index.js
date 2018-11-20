/* trees-story.tursics.de - JavaScript file */

/*jslint browser: true*/
/*global $*/

// -----------------------------------------------------------------------------

String.prototype.startsWith = String.prototype.startsWith || function (prefix) {
	'use strict';

	return this.indexOf(prefix) === 0;
};

// -----------------------------------------------------------------------------

function initSocialMedia() {
	'use strict';

	setTimeout(function () {
		$.ajax('http://www.tursics.de/v5shariff.php?url=http://trees-story.tursics.de/')
			.done(function (json) {
				$('.social .facebook span').html(json.facebook);
				if (json.facebook > 0) {
					$('.social .facebook span').addClass('active');
				}

				$('.social .twitter span').html(json.twitter);
				if (json.twitter > 0) {
					$('.social .twitter span').addClass('active');
				}
			});
	}, 1000);
}

// -----------------------------------------------------------------------------

function initQuiz() {
	'use strict';

	$('.embedQuiz .questionOptions a').on('click', function () {
		var elememt = this.parentElement.parentElement.parentElement;

		$(this).addClass('selected');

		$('.questionOptions', $(elememt)).addClass('disabled');
		$('.count', $(elememt)).hide();
		$('.answer', $(elememt)).show();
	});
	$('.embedQuiz .answer a').on('click', function () {
		var elememt = this.parentElement.parentElement.parentElement,
			i = 0,
			name,
			page = 0;

		for (i = 0; i < elememt.classList.length; ++i) {
			name = elememt.classList[i];
			if ((name.length > 4) && (0 === name.indexOf('page'))) {
				page = parseInt(name.substr(4), 10);
			}
		}
		$('.embedQuiz .page' + page).hide();
		$('.embedQuiz .page' + (page + 1)).show();
	});

	// bottom quiz

	$('.embedGuessing a.guess1').on('click', function () {
		$(this).hide();
		$('body').removeClass('hideThirdPart');
	});
	$('.embedGuessing a.guess2').on('click', function () {
		$(this).hide();
		$('body').removeClass('hideFourthPart');
	});
	$('.embedGuessing a.guess3').on('click', function () {
		$(this).hide();
		$('body').removeClass('hideFivethPart');
	});
	$('.embedGuessing a.guess4').on('click', function () {
		$(this).hide();
		$('body').removeClass('hideSixthPart');
	});
}

// -----------------------------------------------------------------------------

$(document).on("pageshow", "#pageMap", function () {
	'use strict';

	initQuiz();

	$('.embedSpending a.continue').on('click', function () {
		$(this).hide();
		$('.embedSpendingHint').hide();
		$('.embedSpending .answer').show();
		$('body').removeClass('hideSecondPart');
	});

	$('.embedInfo').addClass('shrink');
	$('.embedInfo .showMore').on('click', function (e) {
		e.preventDefault();
		$(this).parent().removeClass('shrink');
	});
});

// -----------------------------------------------------------------------------
