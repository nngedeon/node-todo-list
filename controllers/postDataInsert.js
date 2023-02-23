const mongoose = require('mongoose')
const datas = require('../models/datasModel')

const postDataInsert = (req,res)=>{
    datas.insertMany({...req.body},(error,data)=>{
    
    })
    res.redirect('/allDatas')
}

module.exports = postDataInsert