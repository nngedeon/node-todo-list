const mongoose = require('mongoose')
const datas = require('../models/datasModel')
const deleteData = (req, res) => {
    const { _id } = req.params
    datas.deleteOne({ _id }, (error, data) => {
        if (data) {
            console.log('delete succes')
            res.redirect('/allDatas')
           
        }
        else {
            console.log(error)
        }
    })
}
module.exports = deleteData