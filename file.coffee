Promise = require('bluebird')
fs = Promise.promisifyAll(require('fs'))
	
exports.save = (file, msg) ->
	fs.writeFileAsync(file, msg)
		.then ->
			console.log 'It\'s saved!'
			return
		.error (error) ->
			console.log error
			return