/*jslint browser: true*/
/*global console,require*/

//-----------------------------------------------------------------------

function loadTrees() {
	'use strict';

	var fs = require('fs'),
		TSV = require('tsv').TSV,
		filepath = '../data/re_strassenbaeume.tsv',
		buffer = fs.readFileSync(filepath, 'utf-8');

	return TSV.parse(buffer);
}

//-----------------------------------------------------------------------

function garbageCollection(trees) {
	'use strict';

	var i;

	for (i = 0; i < trees.length; ++i) {
		if ('Land Berlin' !== trees[i].Eigentuemer) {
//			console.log('Error: ' + JSON.stringify(trees[i], null, 4));
			trees.splice(i, 1);
			--i;
			continue;
		}
		if ('null' === trees[i].BEZIRK) {
//			console.log('Error: ' + JSON.stringify(trees[i], null, 4));
			trees.splice(i, 1);
			--i;
			continue;
		}
	}
}

//-----------------------------------------------------------------------

function analyseOwnership(trees) {
	'use strict';

	var i;

	// nothing to do. It's allways 'Land Berlin'
	for (i = 0; i < trees.length; ++i) {
		if ('Land Berlin' !== trees[i].Eigentuemer) {
			console.log('Error: ' + JSON.stringify(trees[i], null, 4));
		}
	}
}

//-----------------------------------------------------------------------

function logData(trees, data, title, top, bottom) {
	'use strict';

	var i, key, sortable = [];

	for (key in data) {
		sortable.push({title: key, count: data[key]});
	}

	sortable.sort(function (left, right) {
		return right.count - left.count;
	});

	console.log(title);
	for (i = 0; i < sortable.length; ++i) {
		if (i === top) {
			break;
		}
		if (sortable[i].count >= (trees.length / 20)) {
			console.log('  ' + sortable[i].title + ': ' + sortable[i].count + ' trees (' + (parseInt(sortable[i].count / trees.length * 1000, 10) / 10) + '%)');
		} else {
			console.log('  ' + sortable[i].title + ': ' + sortable[i].count + ' trees');
		}
	}

	if (0 === bottom) {
		return;
	}

	console.log('  :');
	for (i = sortable.length - bottom; i < sortable.length; ++i) {
		console.log('  ' + sortable[i].title + ': ' + sortable[i].count + ' trees');
	}
}

//-----------------------------------------------------------------------

function logDataKey(trees, data, title, top, bottom) {
	'use strict';

	var i, key, sortable = [];

	for (key in data) {
		sortable.push({title: key, count: data[key]});
	}

	sortable.sort(function (left, right) {
		return right.title - left.title;
	});

	console.log(title);
	for (i = 0; i < sortable.length; ++i) {
		if (i === top) {
			break;
		}
		if (sortable[i].count >= (trees.length / 20)) {
			console.log('  ' + sortable[i].title + ': ' + sortable[i].count + ' trees (' + (parseInt(sortable[i].count / trees.length * 1000, 10) / 10) + '%)');
		} else {
			console.log('  ' + sortable[i].title + ': ' + sortable[i].count + ' trees');
		}
	}

	if (0 === bottom) {
		return;
	}

	console.log('  :');
	for (i = sortable.length - bottom; i < sortable.length; ++i) {
		console.log('  ' + sortable[i].title + ': ' + sortable[i].count + ' trees');
	}
}

//-----------------------------------------------------------------------

function analyseDistricts(trees) {
	'use strict';

	var i, count = [], data = {}, item;

	for (i = 0; i < trees.length; ++i) {
		item = trees[i].BEZIRK;

		if (-1 === count.indexOf(item)) {
			count.push(item);
			data[item] = 1;
		} else {
			++data[item];
		}
	}

	logData(trees, data, 'Districts:', 12, 0);
}

//-----------------------------------------------------------------------

function analyseType(trees) {
	'use strict';

	var i, key, count = [], data = {}, item;

	for (i = 0; i < trees.length; ++i) {
		item = trees[i].Gattung;

		if (-1 === count.indexOf(item)) {
			count.push(item);
			data[item] = 1;
		} else {
			++data[item];
		}
	}

	logData(trees, data, 'Type:', 10, 5);
}

//-----------------------------------------------------------------------

function analyseSubType(trees) {
	'use strict';

	var i, key, count = [], data = {}, item;

	// "Art_Dtsch": "WINTER-LINDE"
	// "Art_Bot": "TILIA CORDATA"

	for (i = 0; i < trees.length; ++i) {
		item = trees[i].Art_Bot;

		if (-1 === count.indexOf(item)) {
			count.push(item);
			data[item] = 1;
		} else {
			++data[item];
		}
	}

	logData(trees, data, 'Subtype:', 10, 0);
}

//-----------------------------------------------------------------------

function analyseAge(trees) {
	'use strict';

	var i, key, count = [], data = {}, item, sum = 0;

	// "Pflanzjahr": 1990
	// "Standalter": 26

	for (i = 0; i < trees.length; ++i) {
		item = parseInt(trees[i].Standalter, 10);
		if (isNaN(item)) {
			continue;
		}
		sum += item;

		if (-1 === count.indexOf(item)) {
			count.push(item);
			data[item] = 1;
		} else {
			++data[item];
		}
	}

	logData(trees, data, 'Age in years:', 5, 0);
	console.log('  best: ' + (parseInt(sum / trees.length * 10, 10) / 10) + ' years');

	count = [];
	data = {};
	for (i = 0; i < trees.length; ++i) {
		item = parseInt(trees[i].Pflanzjahr, 10);
		if (isNaN(item)) {
			continue;
		}

		if (-1 === count.indexOf(item)) {
			count.push(item);
			data[item] = 1;
		} else {
			++data[item];
		}
	}

	logDataKey(trees, data, 'Oldest:', 10, 10);
}

//-----------------------------------------------------------------------

function analyseHeight(trees) {
	'use strict';

	var i, key, count = [], data = {}, item, sum = 0;

	for (i = 0; i < trees.length; ++i) {
		item = parseInt(trees[i].BaumHoehe * 100, 10);
		if (isNaN(item)) {
			continue;
		}
		sum += item;

		if (-1 === count.indexOf(item)) {
			count.push(item);
			data[item] = 1;
		} else {
			++data[item];
		}
	}

	logDataKey(trees, data, 'Height (in cm):', 21, 10);
	console.log('  best: ' + (parseInt(sum / trees.length, 10)) + ' cm');
}

//-----------------------------------------------------------------------

try {
	console.log('loading...');

	var trees = loadTrees();

	console.log('Data count:  ' + trees.length);
//	console.log('First tree: ' + JSON.stringify(trees[0], null, 4));
	// "StrName": "Hennigsdorfer Straße"
	// "Stammumfg": 50
	// "KroneDurch": "null"

	garbageCollection(trees);
	console.log('Trees count: ' + trees.length);

	analyseOwnership(trees);
	analyseDistricts(trees);
	analyseType(trees);
	analyseSubType(trees);
	analyseAge(trees);
	analyseHeight(trees);
} catch (e) {
	console.error(e);
}

//-----------------------------------------------------------------------
//eof
