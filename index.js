'use strict';

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var Path = require("path");

var outputFolder = '/Users/seth/Documents/zzz_output';

function readDir(dirName) {
    return fs.readdirAsync(dirName).map(function (fileName) {
        var path = Path.join(dirName, fileName);
        return fs.statAsync(path).then(function(stat) {
            if(stat.isDirectory()) {
              console.log('make folder', path);

              fs.stat(Path.join(outputFolder, fileName), function (err, stat) {
                if (err == null) {
                  console.log('File exists');
                } else if (err.code == 'ENOENT') {
                  fs.mkdirSync(Path.join(outputFolder, fileName));
                } else {
                  console.log('Error creating folder', err.code);
                }
              });

              return readDir(path)
            } else {
              console.log('copy file', path)

              return path
            }
        });
    });
}

readDir('/Users/seth/Documents/zzz').then(function(v){
   // console.log(v.join("\n"));
});


