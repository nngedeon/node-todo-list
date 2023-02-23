/**
 * loading of modules
 */
const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
/**
 * files caling controllers
 */
const getDatas= require('./controllers/getDatas')
const postDatas= require('./controllers/postDatas')
const getDataInsert = require('./controllers/getDataInsert')
const postDataInsert = require('./controllers/postDataInsert')
const allDatas = require('./controllers/allData')
const deleteData = require('./controllers/deleteData')
const backButton = require('./controllers/backButton')

/**
 * the use of mongoose
 */
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/myTodoList',{useNewUrlParser:true,useUnifiedTopology:true})
// the use of bodyParser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine','ejs')
/**
 * requests manager
 */
app.get('/',getDatas)
app.post('/',postDatas)
app.get('/dataInsert',getDataInsert)
app.post('/insert',postDataInsert)
app.get('/allDatas',allDatas)
app.get('/delete/toDO/:_id',deleteData)
app.get('/button/back',backButton)

app.listen(3000,()=>console.log('launched server'))