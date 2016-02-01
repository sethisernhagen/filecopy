'use strict';

let Promise = require("bluebird");
let copy = require('recursive-copy');


let inputFolder = '/Users/seth/Documents/zzz';
let outputFolder = '/Users/seth/Documents/zzz_output';

let copyFolders = [{
  src: '/Users/seth/Documents/zzz',
  dest: '/Users/seth/Documents/zzz_output'
}, {
  src: '/Users/seth/Documents/zzz2',
  dest: '/Users/seth/Documents/zzz_output2'
}];

for(let copyFolder of copyFolders) {
  copy(copyFolder.src, copyFolder.dest, { overwrite: true })
    .then(function(results) {
      console.info('Copied ' + results.length + ' files');
    })
    .catch(function(error) {
      console.error('Copy failed: ' + error);
    });
}