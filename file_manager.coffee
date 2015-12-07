Promise = require('bluebird')
fs = Promise.promisifyAll(require('fs'))
		
exports.scan = () ->
	fs.readdirAsync('./test_files')
	.then (files) ->
		files.forEach (file) ->
			console.log(file)
			return
		return
	return
	
	