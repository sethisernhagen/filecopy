express = require('express')
app = express()
Promise = require('bluebird')
fs = require('fs')

# fs.writeFile('.test_files/message.txt', 'Hello Node!', (err) ->
# 	if err 
# 		throw err
# 	console.log 'It\'s saved!')
	
fs.writeFile('.test_files/message.txt', 'Hello Node!', (err) ->
	if err 
		throw err
	console.log 'It\'s saved!')
	
	