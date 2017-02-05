/* trees-story.tursics.de - JavaScript file */

/*jslint browser: true*/
/*global $,L*/

var map = null;
var layerPopup = null;
var layerGroup = null;
//var budget = null;

// -----------------------------------------------------------------------------

String.prototype.startsWith = String.prototype.startsWith || function (prefix) {
	'use strict';

	return this.indexOf(prefix) === 0;
};

// -----------------------------------------------------------------------------

function mapAction() {
	'use strict';

	$('#headerBox').removeClass('big');
	$('#searchBox').removeClass('big');
	$('#scrollDownPane').css('display', 'none');
	map.scrollWheelZoom.enable();
}

// -----------------------------------------------------------------------------

function fixEuro(item) {
	'use strict';

	if (item === '') {
		return 0;
	} else if (item === null) {
		return 0;
	} else if ('number' === typeof item) {
		return item;
	} else if ('T€' === item.substring(item.length - 2)) {
		return parseInt(item.substring(0, item.length - 2).replace('.', '').replace(',', '.'), 10) * 1000;
	}
	return item;
}

// -----------------------------------------------------------------------------

function fixData(val) {
	'use strict';

	function fixComma(item) {
		if (item === '') {
			return 0;
		} else if (item === null) {
			return 0;
		}
		return parseFloat(String(item).replace('.', '').replace(',', '.'));
	}

	val.NGF = parseInt(val.NGF, 10);
	val.BGF = fixComma(val.BGF);
	val.NF = fixComma(val.NF);
	val.Grundstuecksflaeche = fixComma(val.Grundstuecksflaeche);
	val.GebaeudeHoeheInM = fixComma(val.GebaeudeHoeheInM);
	val.GebaeudeUmfangInMAusConject = fixComma(val.GebaeudeUmfangInMAusConject);
	val.FassadenFlaeche = fixComma(val.FassadenFlaeche);
	val.Dachflaeche = fixComma(val.Dachflaeche);
	val.BWCAnzahl = fixComma(val.BWCAnzahl);
	val.RaeumeNutzflaecheBGF = parseInt(val.RaeumeNutzflaecheBGF, 10);
	val.Sanitaerflaeche = fixComma(val.Sanitaerflaeche);
	val.bereitsSanierteFlaecheInProzent = fixComma(val.bereitsSanierteFlaecheInProzent);

	val.FensterKosten = fixEuro(val.FensterKosten);
	val.FassadenKosten = fixEuro(val.FassadenKosten);
	val.DachKosten = fixEuro(val.DachKosten);
	val.AufzugKosten = fixEuro(val.AufzugKosten);
	val.RampeKosten = fixEuro(val.RampeKosten);
	val.EingangKosten = fixEuro(val.EingangKosten);
	val.TuerenKosten = fixEuro(val.TuerenKosten);
	val.BWCKosten = fixEuro(val.BWCKosten);
	val.ZwischensummeBarrierefreiheitKosten = fixEuro(val.ZwischensummeBarrierefreiheitKosten);
	val.zweiterRettungswegKosten = fixEuro(val.zweiterRettungswegKosten);
	val.RaeumeKosten = fixEuro(val.RaeumeKosten);
	val.Raeume2Kosten = fixEuro(val.Raeume2Kosten);
	val.SanitaerKosten = fixEuro(val.SanitaerKosten);
	val.GebaeudeGesamt = fixEuro(val.GebaeudeGesamt);

	if (val.SanitaerSanierungsjahr === 0) {
		val.SanitaerSanierungsjahr = '-';
	} else if (val.SanitaerSanierungsjahr === null) {
		val.SanitaerSanierungsjahr = '-';
	}

	return val;
}

// -----------------------------------------------------------------------------

function formatNumber(txt) {
	'use strict';

	txt = String(parseInt(txt, 10));
	var sign = '',
		pos = 0;
	if (txt[0] === '-') {
		sign = '-';
		txt = txt.slice(1);
	}

	pos = txt.length;
	while (pos > 3) {
		pos -= 3;
		txt = txt.slice(0, pos) + '.' + txt.slice(pos);
	}

	return sign + txt;
}

// -----------------------------------------------------------------------------

function enrichMissingData(data) {
	'use strict';

	try {
		$.each(data, function (key, value) {
			var val = fixData(value),
				sum1 = 0,
				sum2 = 0,
				diff = 0,
				isSport = false,
				isSchool = false;
			if ((typeof val.lat !== 'undefined') && (typeof val.lng !== 'undefined')) {
				sum1 = val.GebaeudeGesamt;
				sum2 = val.FensterKosten + val.FassadenKosten + val.DachKosten + val.ZwischensummeBarrierefreiheitKosten + val.zweiterRettungswegKosten + val.RaeumeKosten + val.SanitaerKosten;
				diff = sum1 - sum2;
				isSport = val.Bauwerk.startsWith('Sport');
				isSchool = !isSport && (val.Bauwerk.indexOf('chul') !== -1);

				val.Aussenanlagen = 0;
				val.Baukosten = 0;

				if (isSchool && (diff > 1000)) {
					val.Aussenanlagen = diff;
				} else if (isSport && (diff > 1000)) {
					val.Baukosten = diff;
				}
			}
		});
	} catch (e) {
//		console.log(e);
	}

	return data;
}

// -----------------------------------------------------------------------------

function updateMapHoverItem(coordinates, data, icon) {
	'use strict';

	var options = {
		closeButton: false,
		offset: L.point(0, -32),
		className: 'printerLabel'
	},
		str = '';

	str += '<div class="top ' + icon.options.markerColor + '">' + data.Schulname + '</div>';
	str += '<div class="middle">€' + formatNumber(data.GebaeudeGesamt) + '</div>';
	str += '<div class="bottom ' + icon.options.markerColor + '">' + data.Bauwerk + '</div>';

	layerPopup = L.popup(options)
		.setLatLng(coordinates)
		.setContent(str)
		.openOn(map);
}

// -----------------------------------------------------------------------------

function updateMapVoidItem(data) {
	'use strict';

	if (layerPopup && map) {
		map.closePopup(layerPopup);
		layerPopup = null;
    }
}

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
}

// -----------------------------------------------------------------------------

$(document).on("pagecreate", "#pageMap", function () {
	'use strict';

	// center the city hall
//	initMap( 'mapContainer', 52.515807, 13.479470, 16);
});

// -----------------------------------------------------------------------------

$(document).on("pageshow", "#pageMap", function () {
	'use strict';

	// center the city hall
//	initMap('mapContainer', 52.515807, 13.479470, 16);
	initQuiz();

	$('#autocomplete').val('');
	$('#receipt .group').on('click', function (e) {
		$(this).toggleClass('groupClosed');
	});
	$('#receiptClose').on('click', function (e) {
		$('#receiptBox').css('display', 'none');
	});
	$('#searchBox .sample a:nth-child(1)').on('click', function (e) {
		$('#autocomplete').val('Obersee-Schule (11G19)');
		selectSuggestion(1111901);
	});
	$('#searchBox .sample a:nth-child(2)').on('click', function (e) {
		$('#autocomplete').val('Lichtenberg');
		selectSuggestion(1100000);
	});
	$('.embedPrinterLabel a').on('click', function (e) {
		selectPrinterLabel($(this).prop('id'));
	});
	$('.embedInfo').addClass('shrink');
	$('.embedInfo .showMore').on('click', function (e) {
		e.preventDefault();
		$(this).parent().removeClass('shrink');
	});
});

// -----------------------------------------------------------------------------

$(function () {
	'use strict';

//	$('a[href*="#"]:not([href="#"])').click(printerLabelClick);
});

// -----------------------------------------------------------------------------
