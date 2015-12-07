express = require('express')
app = express()
Promise = require('bluebird')
file = require('./file')

file.save('./test_files/message1.txt', 'What?')
