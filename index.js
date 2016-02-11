/* global process */
'use strict';

let Promise = require("bluebird");
let copy = require('recursive-copy');
let fs = require('fs');

let isFolder = process.argv[2];
let folderName = process.argv[3];
let label = process.argv[4];
let fileName = process.argv[5];

let dest = {
  tv: '/Users/seth/Documents/zzz_output',
  movie: '/Users/seth/Documents/zzz_output2'
};

console.log('fileName =', fileName,
  '\nfolderName =', folderName,
  '\nisfolder =', isFolder,
  '\nlabel', label);

if (isFolder){
      copy(folderName, dest[label])
      .then(function(results) {
        console.info('Copied ' + results.length + ' files');
      })
      .catch(function(error) {
        console.error('Copy failed: ' + error);
      });
} else {
  // create paths
  let srcPath = folderName + '/' + fileName;
  let destPath = dest[label] + '/' + fileName;
  fs.createReadStream(srcPath).pipe(fs.createWriteStream(destPath));
}


// setInterval(function() {
//   for(let copyFolder of copyFolders) {
//     copy(copyFolder.src, copyFolder.dest)
//       .then(function(results) {
//         console.info('Copied ' + results.length + ' files');
//       })
//       .catch(function(error) {
//         console.error('Copy failed: ' + error);
//       });
//   }
// }, 1000);

