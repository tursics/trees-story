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

	$('.embedQuiz .page1 .questionOptions a').on('click', function (e) {
		$('.embedQuiz .page1 .answer').show();
	});
	$('.embedQuiz .page2 .questionOptions a').on('click', function (e) {
		$('.embedQuiz .page2 .answer').show();
	});
	$('.embedQuiz .page3 .questionOptions a').on('click', function (e) {
		$('.embedQuiz .page3 .answer').show();
	});
	$('.embedQuiz .page4 .questionOptions a').on('click', function (e) {
		$('.embedQuiz .page4 .answer').show();
	});
	$('.embedQuiz .page1 .answer a').on('click', function (e) {
		$('.embedQuiz .page1').hide();
		$('.embedQuiz .page2').show();
	});
	$('.embedQuiz .page2 .answer a').on('click', function (e) {
		$('.embedQuiz .page2').hide();
		$('.embedQuiz .page3').show();
	});
	$('.embedQuiz .page3 .answer a').on('click', function (e) {
		$('.embedQuiz .page3').hide();
		$('.embedQuiz .page4').show();
	});

	// bottom quiz

	$('.embedGuessing a.guess1').on('click', function (e) {
		$(this).hide();
		$('body').removeClass('hideThirdPart');
	});
	$('.embedGuessing a.guess2').on('click', function (e) {
		$(this).hide();
		$('body').removeClass('hideFourthPart');
	});
	$('.embedGuessing a.guess3').on('click', function (e) {
		$(this).hide();
		$('body').removeClass('hideFivethPart');
	});
	$('.embedGuessing a.guess4').on('click', function (e) {
		$(this).hide();
		$('body').removeClass('hideSixthPart');
	});
}

// -----------------------------------------------------------------------------

$(document).on("pageshow", "#pageMap", function () {
	'use strict';

	initQuiz();

	$('.embedSpending a.continue').on('click', function (e) {
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
