'use strict';

let Promise = require("bluebird");
let copy = require('recursive-copy');


let inputFolder = '/Users/seth/Documents/zzz';
let outputFolder = '/Users/seth/Documents/zzz_output';



copy(inputFolder, outputFolder, { overwrite: true })
	.then(function(results) {
		console.info('Copied ' + results.length + ' files');
	})
	.catch(function(error) {
		console.error('Copy failed: ' + error);
	});