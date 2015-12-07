express = require('express')
app = express()
Promise = require('bluebird')
file = require('./file')

setInterval(() ->
	file.save('./test_files/message1.txt', 'What?')
	return
10000)
# file.save('./test_files/message1.txt', 'What?')
