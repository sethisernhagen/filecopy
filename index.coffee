express = require('express')
app = express()
Promise = require('bluebird')
file = require('./file')
fileManager = require('./file_manager')

setInterval(() ->
	# file.save('./test_files/message1.txt', 'What?')
	fileManager.scan()
	return
3000)

