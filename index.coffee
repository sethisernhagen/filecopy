express = require('express')
app = express()
Promise = require('bluebird')
fs = Promise.promisifyAll(require('fs'))
	
fs.writeFileAsync('./test_files/message1.txt', 'Hello Node!')
	.then ->
		console.log 'It\'s saved!'
		return
	.error (error) ->
		console.log error
		return
	
	